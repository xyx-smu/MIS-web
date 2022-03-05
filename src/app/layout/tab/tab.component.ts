import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { TabModel } from "src/app/models/type";

import { TabService } from "../../services/tab.service";

@Component({
  selector: "app-tab",
  templateUrl: "./tab.component.html",
  styleUrls: ["./tab.component.less"],
})
export class TabComponent implements OnInit {
  get tabs(): TabModel[] {
    return this.tabService.tabArray;
  }
  get currSelectedIndexTab(): number {
    return this.tabService.currSelectedIndexTab;
  }

  constructor(private tabService: TabService, private router: Router) {}

  ngOnInit(): void {}

  goPage(path: string) {
    this.router.navigateByUrl(path);
  }

  // 关闭当前Tab
  closeCurrentTab(tab: TabModel, index: number): void {
    if (1 === this.tabs.length) {
      return;
    }
    this.tabService.delTab(tab, index);
  }

  closeTab(tab: TabModel, e: MouseEvent, index: number): void {
    this.closeCurrentTab(tab, index);
  }

  // 点击tab上的关闭icon
  clickCloseIcon(indexObj: { index: number }): void {
    this.closeCurrentTab(this.tabs[indexObj.index], indexObj.index);
  }

  trackByTab(index: number, tab: TabModel): string {
    return tab.title;
  }
}
