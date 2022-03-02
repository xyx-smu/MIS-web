import { NgModule } from '@angular/core';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { TabComponent } from './tab/tab.component';
import { SharedModule } from '../share/shared.module';

@NgModule({
  declarations: [LayoutComponent, TabComponent],
  imports: [SharedModule, LayoutRoutingModule],
})
export class LayoutModule {}
