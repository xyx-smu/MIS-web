import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.less'],
})
export class Page1Component implements OnInit {
  value: string = '111111';

  constructor() {}

  ngOnInit(): void {}
}
