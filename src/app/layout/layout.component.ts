import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { MenuNav } from "../models/menu";
import { Menu } from "../models/type";
import { TabService } from "../services/tab.service";
import { filter, map, mergeMap, takeUntil, tap } from "rxjs/operators";
import { Subject } from "rxjs";
import { LocalStorageService } from "../services/local-storage.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../services/login.service";
import { NzMessageService } from "ng-zorro-antd/message";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.less"],
})
export class LayoutComponent implements OnDestroy, OnInit {
  isCollapsed: boolean = false;
  menus: Menu[] = MenuNav;
  routerPath: string = "";
  realName: string = "";
  setPwdVis: boolean = false;
  current: number = 1;
  currCount: number = 60;
  newpsw: string = "";
  checknewpsw: string = "";

  validateForm!: FormGroup;

  private destroy$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private tabService: TabService,
    private router: Router,
    private activitedRoute: ActivatedRoute,
    private localStorageService: LocalStorageService,
    private msg: NzMessageService,
    private service: LoginService
  ) {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      emailCode: [null, [Validators.required]],
    });
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this.destroy$),
        tap((event: any) => {
          this.routerPath = event.urlAfterRedirects;
        }),
        map(() => activitedRoute),
        map((router) => {
          while (router.firstChild) {
            router = router.firstChild;
          }
          return router;
        }),
        mergeMap((routerData) => routerData.data)
      )
      .subscribe((routerData) => {
        this.tabService.addTab({
          title: routerData.title,
          path: this.routerPath,
        });
        this.tabService.findIndex(this.routerPath);
      });
  }
  ngOnInit(): void {
    this.realName = this.localStorageService.getItem("realName");
    this.clickMenuItem(this.menus);
  }

  // 改变当前菜单展示状态
  changeOpen(currentMenu: Menu, allMenu: Menu[]): void {
    allMenu.forEach((item) => {
      item.open = false;
    });
    currentMenu.open = true;
  }

  // 显示初始状态下的菜单状态
  clickMenuItem(menus: Menu[]): void {
    if (!menus) {
      return;
    }
    const index =
      this.routerPath.indexOf("?") === -1
        ? this.routerPath.length
        : this.routerPath.indexOf("?");
    const routePath = this.routerPath.substring(0, index);
    for (const item of menus) {
      item.open = false;
      item.selected = false;
      // 一级菜单
      if (!item.children || item.children.length === 0) {
        // if (item.path === routePath) {
        if (routePath.includes(item.path!)) {
          item.selected = true;
        }
        continue;
      }
      // 二级菜单
      for (const subItem of item.children) {
        subItem.selected = false;
        subItem.open = false;
        if (!subItem.children || subItem.children?.length === 0) {
          // if (subItem.path === routePath) {
          if (routePath.includes(subItem.path!)) {
            item.open = true;
            item.selected = true;
            subItem.selected = true;
            subItem.open = true;
          }
          continue;
        }
        for (const thirdItem of subItem.children) {
          // if (thirdItem.path === routePath) {
          if (routePath.includes(thirdItem.path!)) {
            item.open = true;
            item.selected = true;
            subItem.selected = true;
            subItem.open = true;
            thirdItem.open = true;
            thirdItem.selected = true;
          } else {
            thirdItem.open = false;
            thirdItem.selected = false;
          }
        }
      }
    }
  }

  setpassword() {
    this.setPwdVis = true;
  }

  getEmailCode() {
    const userInfo = {
      username: this.localStorageService.getItem("username"),
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

  verifyNext() {
    if (this.validateForm.valid) {
      const emailInfo = this.validateForm.value;
      this.service.verifyInfo(emailInfo).subscribe({
        next: () => {
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
        username: this.localStorageService.getItem("username"),
        password: this.checknewpsw,
      };
      this.service.setPassword(pswInfo).subscribe({
        next: () => {
          this.msg.create("success", "修改成功");
          this.setPwdVis = false;
          this.current = 1;
        },
        error: (e) => console.error(e),
        complete: () => {
          console.log("complete");
        },
      });
    }
  }

  setPwdCancel() {
    this.setPwdVis = false;
  }
  goLogin() {
    this.router.navigateByUrl("/login/login-form");
    this.localStorageService.clear();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
