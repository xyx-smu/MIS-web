import { Injectable } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { TabModel } from "src/app/models/type";
import { SimpleReuseStrategy } from "../utils/reuse-strategy";

@Injectable({
  providedIn: "root",
})
export class TabService {
  private _tabArray: TabModel[] = [];
  private _currSelectedIndexTab: number = 0;

  get tabArray(): TabModel[] {
    return this._tabArray;
  }

  get currSelectedIndexTab() {
    return this._currSelectedIndexTab;
  }

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  public addTab(tabs: TabModel) {
    if (!this._tabArray.find((value) => value.path === tabs.path)) {
      this._tabArray.push(tabs);
    }
  }

  public findIndex(path: string) {
    const currentIndex = this._tabArray.findIndex((tabItem) => {
      return path.includes(tabItem.path);
    });
    this._currSelectedIndexTab = currentIndex;
  }

  // 点击tab标签上x图标删除tab的动作,右键删除当前tab动作
  public delTab(tab: TabModel, index: number): void {
    const tempPath = this.fnFormatePath(tab.path);
    // 移除当前选中的tab
    if (index === this._currSelectedIndexTab) {
      this.tabArray.splice(index, 1);

      this._currSelectedIndexTab = index - 1 < 0 ? 0 : index - 1;
      this.router.navigateByUrl(
        this._tabArray[this._currSelectedIndexTab].path
      );
      // 在reuse-strategy.ts中缓存当前的path，如果是当前的path则不缓存当前路由
      SimpleReuseStrategy.waitDelete = tempPath;
    } else if (index < this._currSelectedIndexTab) {
      this.tabArray.splice(index, 1);
      this._currSelectedIndexTab = this._currSelectedIndexTab - 1;
    } else if (index > this._currSelectedIndexTab) {
      // 移除当前页签右边的页签
      this.tabArray.splice(index, 1);
    }
    // 此操作为了解决例如列表页中有详情页，列表页和详情页两个页面的状态保存问题，解决了只能移除
    // 当前页面关闭的tab中状态的bug
    // const beDeltabArray = [tempPath];
    // beDeltabArray.forEach((item) =>
    //   SimpleReuseStrategy.deleteRouteSnapshot(item)
    // );
    SimpleReuseStrategy.deleteRouteSnapshot(tempPath);
  }

  // 点击tab标签上x图标删除tab的动作,右键删除当前tab动作
  fnFormatePath = function formatePath(path: string): string {
    const newpath = path.replace(/\/[0-9]+/g, "");
    const paramIndex = newpath
      .substring(newpath.lastIndexOf("/") + 1)
      .indexOf("?");
    if (paramIndex > -1) {
      const tempPath = newpath.substring(newpath.lastIndexOf("/") + 1);
      return tempPath.substring(0, paramIndex);
    } else {
      return newpath.substring(newpath.lastIndexOf("/") + 1);
    }
  };
}
