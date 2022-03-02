import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.less'],
})
export class Page2Component implements OnInit {
  value: string = '222222';

  constructor() {}

  ngOnInit(): void {}
}
