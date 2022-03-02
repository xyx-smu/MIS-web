import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from './page2.component';

const routes: Routes = [
  {
    path: '',
    component: Page2Component,
    data: { title: 'pageB', key: '2' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page2RoutingModule {}
