import { AfterViewInit, Component, OnInit } from "@angular/core";
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
export class LoginFormComponent implements OnInit, AfterViewInit {
  validateForm!: FormGroup;

  // 验证码
  identifyCode: string = "";
  getUpperidentifyCode: string = "";
  getLoweridentifyCode: string = "";
  contentWidth: number = 100;
  contentHeight: number = 30;
  fontSizeMin: number = 25;
  fontSizeMax: number = 30;
  backgroundColorMin: number = 255;
  backgroundColorMax: number = 255;
  colorMin: number = 0;
  colorMax: number = 160;
  lineColorMin: number = 100;
  lineColorMax: number = 255;
  dotColorMin: number = 0;
  dotColorMax: number = 255;
  canvasWidth: number = 100;
  canvasHeight: number = 30;

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
      verifyCode: [null, [Validators.required]],
    });
  }
  ngAfterViewInit(): void {
    this.createdCode();
  }

  ngOnInit(): void {}

  submitForm(): void {
    if (
      this.validateForm.value.verifyCode != this.getUpperidentifyCode &&
      this.validateForm.value.verifyCode != this.getLoweridentifyCode
    ) {
      this.msg.create("error", "验证码错误");
    }
    if (
      this.validateForm.valid &&
      (this.validateForm.value.verifyCode == this.getUpperidentifyCode ||
        this.validateForm.value.verifyCode == this.getLoweridentifyCode)
    ) {
      const userInfo = {
        username: this.validateForm.value.username,
        password: this.validateForm.value.password,
      };
      this.service.login(userInfo).subscribe({
        next: (res) => {
          this.localStorageService.setItem("username", res.data.username);
          this.localStorageService.setItem("realName", res.data.real_name);
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

  // 验证码

  createdCode() {
    // 生成4个随机数
    const len = 4;
    const codeList = [];
    const chars = "ABCDEFGHJKMNPQRSTWXYZ123456789";
    const charsLen = chars.length;
    for (let i = 0; i < len; i++) {
      codeList.push(chars.charAt(Math.floor(Math.random() * charsLen)));
    }
    this.identifyCode = codeList.join("");
    this.getLoweridentifyCode = this.identifyCode.toLowerCase();
    this.getUpperidentifyCode = this.identifyCode;
    this.drawPic();
  }

  drawPic() {
    // 绘制背景和颜色
    const canvas = <HTMLCanvasElement>document.getElementById("verify-code");
    const res = canvas.getContext("2d");
    if (!res || !(res instanceof CanvasRenderingContext2D)) {
      throw new Error("Failed to get 2D context");
    }
    const ctx: CanvasRenderingContext2D = res;
    ctx.textBaseline = "bottom";
    // 绘制背景
    ctx.fillStyle = this.randomColor(
      this.backgroundColorMin,
      this.backgroundColorMax
    );
    ctx.fillRect(0, 0, this.contentWidth, this.contentHeight);
    // 绘制文字
    for (let i = 0; i < this.identifyCode.length; i++) {
      this.drawText(ctx, this.identifyCode[i], i);
    }
    this.drawLine(ctx);
    this.drawDot(ctx);
  }

  randomColor(min: number, max: number) {
    // 生成一个随机的颜色
    const r = this.randomNum(min, max);
    const g = this.randomNum(min, max);
    const b = this.randomNum(min, max);
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  randomNum(min: number, max: number) {
    // 生成一个随机数
    return Math.floor(Math.random() * (max - min) + min);
  }

  // 绘制干扰线
  drawLine(ctx: CanvasRenderingContext2D) {
    for (let i = 0; i < 5; i++) {
      ctx.strokeStyle = this.randomColor(this.lineColorMin, this.lineColorMax);
      ctx.beginPath();
      ctx.moveTo(
        this.randomNum(0, this.contentWidth),
        this.randomNum(0, this.contentHeight)
      );
      ctx.lineTo(
        this.randomNum(0, this.contentWidth),
        this.randomNum(0, this.contentHeight)
      );
      ctx.stroke();
    }
  }

  drawText(ctx: CanvasRenderingContext2D, txt: any, i: number) {
    // 倾斜文字
    ctx.fillStyle = this.randomColor(this.colorMin, this.colorMax);
    ctx.font = this.randomNum(this.fontSizeMin, this.fontSizeMax) + "px SimHei";
    const x = (i + 1) * (this.contentWidth / (this.identifyCode.length + 1));
    const y = this.randomNum(this.fontSizeMax, this.contentHeight - 5);
    var deg = this.randomNum(-45, 45);
    // 修改坐标原点和旋转角度
    ctx.translate(x, y);
    ctx.rotate((deg * Math.PI) / 180);
    ctx.fillText(txt, 0, 0);
    // 恢复坐标原点和旋转角度
    ctx.rotate((-deg * Math.PI) / 180);
    ctx.translate(-x, -y);
  }

  drawDot(ctx: CanvasRenderingContext2D) {
    // 绘制干扰点
    for (let i = 0; i < 80; i++) {
      ctx.fillStyle = this.randomColor(0, 255);
      ctx.beginPath();
      ctx.arc(
        this.randomNum(0, this.canvasWidth),
        this.randomNum(0, this.canvasHeight),
        1,
        0,
        2 * Math.PI
      );
      ctx.fill();
    }
  }
}
