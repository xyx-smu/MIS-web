import { Component, OnDestroy, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";
import { Circle } from "src/app/models/type";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
})
export class LoginComponent implements OnDestroy, OnInit {
  circleArr: Circle[] = [];

  reHeight: number = 780;
  reWidth: number = 1440;

  private destroy$ = new Subject<void>();
  constructor(private router: Router) {}

  ngOnInit(): void {
    //设置定时器每20毫秒更新和渲染
    const canvas = <HTMLCanvasElement>document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");
    let mySetInterval = setInterval(() => {
      if (this.router.url.startsWith("/login")) {
        ctx!.clearRect(0, 0, this.reWidth, this.reHeight);
        for (var i = 0; i < this.circleArr.length; i++) {
          this.update(this.circleArr[i]) && this.render(this.circleArr[i]);
        }
      } else {
        clearInterval(mySetInterval);
      }
    }, 20);
  }

  addCircle(x: number, y: number, r: number) {
    let circle: any = [];
    circle.x = x;
    circle.y = y;
    circle.r = r;
    circle.color =
      "rgb(" +
      (Math.random() * 240 + 9) +
      "," +
      (Math.random() * 220 + 18) +
      ",203)";
    //随机方向
    circle.dx = Math.random() * 12 - 7;
    circle.dy = Math.random() * 12 - 7;
    //往数组中push自己
    this.circleArr.push(circle);
  }

  // 渲染
  render(circle: any) {
    const canvas = <HTMLCanvasElement>document.getElementById("mycanvas");
    const ctx = canvas.getContext("2d");
    //新建一条路径
    ctx!.beginPath();
    //创建一个圆
    ctx!.arc(circle.x, circle.y, circle.r, 0, Math.PI * 2, true);
    //设置样式颜色
    ctx!.fillStyle = circle.color;
    //通过填充路径的内容区域生成实心的图形
    ctx!.fill();
  }

  //更新
  update(circle: any) {
    circle.x += circle.dx;
    circle.y += circle.dy;
    circle.r--;
    if (circle.r < 0) {
      for (var i = 0; i < this.circleArr.length; i++) {
        if (this.circleArr[i] === circle) {
          this.circleArr.splice(i, 1);
        }
      }
      return false;
    }
    return true;
  }

  //鼠标移动事件
  mouseMove(event: MouseEvent) {
    this.addCircle(event.clientX, event.clientY, 20);
    // 获取当前窗口大小
    this.reHeight =
      document.getElementsByClassName("container")[0].clientHeight;
    this.reWidth = document.getElementsByClassName("container")[0].clientWidth;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
