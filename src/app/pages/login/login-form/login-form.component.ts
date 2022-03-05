import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { NzMessageService } from "ng-zorro-antd/message";
import { accessTokenKey, refreshTokenKey } from "src/app/models/constant";
import { LocalStorageService } from "src/app/services/local-storage.service";
import { LoginService } from "src/app/services/login.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.less"],
})
export class LoginFormComponent implements OnInit {
  validateForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private service: LoginService,
    private msg: NzMessageService,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {}

  submitForm(): void {
    if (this.validateForm.valid) {
      const userInfo = {
        username: this.validateForm.value.username,
        password: this.validateForm.value.password,
      };
      this.service.login(userInfo).subscribe({
        next: (res) => {
          console.log("next", res);
          this.localStorageService.setItem("username", res.data.username);
          this.localStorageService.setItem(accessTokenKey, res.data.access);
          this.localStorageService.setItem(refreshTokenKey, res.data.refresh);
          if (res.code == 0) {
            this.msg.create("success", `登录成功`);
            this.router.navigateByUrl("layout"); // 路由跳转
            this.validateForm.reset();
          } else {
            this.msg.create("error", res.message!);
            this.validateForm.reset();
          }
        },
        error: (res) => {
          console.log("error", res);
        },
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
}
