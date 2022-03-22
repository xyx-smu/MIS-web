import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { NzMessageService } from "ng-zorro-antd/message";
import { LoginService } from "src/app/services/login.service";
import { ValidatorsService } from "src/app/services/validators/validators.service";

@Component({
  selector: "app-forget-form",
  templateUrl: "./forget-form.component.html",
  styleUrls: ["./forget-form.component.less"],
})
export class ForgetFormComponent implements OnInit {
  current: number = 0;
  username: string = "";
  currCount: number = 60;
  newpsw: string = "";
  checknewpsw: string = "";
  chooseuser: string = "process"; // 选择账号的状态
  verifyuser: string = "wait"; // 身份验证的状态
  setpsw: string = "wait"; // 修改密码的状态
  done: string = "wait"; // 完成的状态
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private validate: ValidatorsService,
    private msg: NzMessageService,
    private service: LoginService
  ) {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      emailCode: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  next(): void {
    const userInfo = { username: this.username };
    this.service.checkUsername(userInfo).subscribe({
      next: () => {
        this.chooseuser = "finish";
        this.verifyuser = "process";
        this.current += 1;
      },
      error: (e) => {
        console.error(e);
      },
      complete: () => {
        console.log("complete");
      },
    });
  }

  getEmailCode() {
    const userInfo = {
      username: this.username,
      email: this.validateForm.value.email,
    };
    this.service.getEmailCode(userInfo).subscribe({
      next: (res) => {
        if (res.code == 0) {
          this.msg.create("success", `验证码已发送，请查收邮件！`);
        }
        let a = <HTMLButtonElement>document.getElementById("getEmailCode");
        a.setAttribute("disabled", "true"); //设置按钮为禁用状态
        a.textContent = this.currCount + "秒后重获"; //更改按钮文字
        let InterValObj = window.setInterval(() =>
          //timer变量，控制时间
          {
            if (this.currCount == 0) {
              window.clearInterval(InterValObj); // 停止计时器
              a.removeAttribute("disabled"); //移除禁用状态改为可用
              a.textContent = "重获验证码";
            } else {
              this.currCount--;
              a.textContent = this.currCount + "秒后重获";
            }
          }, 1000); // 启动计时器timer处理函数，1秒执行一次
      },
      error: (e) => console.error(e),
      complete: () => console.log("complete"),
    });
  }

  submitForm() {
    if (this.validateForm.valid) {
      const emailInfo = this.validateForm.value;
      this.service.verifyInfo(emailInfo).subscribe({
        next: () => {
          this.verifyuser = "finish";
          this.setpsw = "process";
          this.current += 1;
        },
        error: (e) => console.error(e),
        complete: () => console.log("complete"),
      });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  confirm() {
    if (this.newpsw !== this.checknewpsw) {
      this.msg.create("error", "两次密码输入不一致");
    } else {
      const pswInfo = {
        username: this.username,
        password: this.checknewpsw,
      };
      this.service.setPassword(pswInfo).subscribe({
        next: () => {
          this.setpsw = "finish";
          this.done = "process";
          this.current += 1;
        },
        error: (e) => console.error(e),
        complete: () => {
          console.log("complete");
        },
      });
    }
  }
}
