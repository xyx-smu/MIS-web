import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1.component';

const routes: Routes = [
  {
    path: '',
    component: Page1Component,
    data: { title: 'pageA', key: '1' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Page1RoutingModule {}
