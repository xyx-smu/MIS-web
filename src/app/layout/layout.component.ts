import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, NavigationEnd, Router } from "@angular/router";
import { MenuNav } from "../models/menu";
import { Menu } from "../models/type";
import { TabService } from "../services/tab.service";
import { filter, map, mergeMap, takeUntil, tap } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.less"],
})
export class LayoutComponent implements OnDestroy, OnInit {
  isCollapsed = false;
  menus: Menu[] = MenuNav;
  routerPath: string = "";
  private destroy$ = new Subject<void>();

  constructor(
    private tabService: TabService,
    private router: Router,
    private activitedRoute: ActivatedRoute
  ) {
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

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
