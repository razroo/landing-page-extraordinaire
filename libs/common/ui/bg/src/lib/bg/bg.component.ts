import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'razroo-bg',
  templateUrl: './bg.component.html',
  styleUrls: ['./bg.component.scss']
})
export class BgComponent implements OnInit {
  @Input() bgColor;

  constructor() {}

  ngOnInit() {}

  getBgColor() {
    return {
      'background': this.bgColor
    };
  }
}
