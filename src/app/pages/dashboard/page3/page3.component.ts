import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.less'],
})
export class Page3Component implements OnInit {
  value: string = '333333';

  constructor() {}

  ngOnInit(): void {}
}
