import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'razroo-mountains',
  templateUrl: './mountains.component.html',
  styleUrls: ['./mountains.component.scss']
})
export class MountainsComponent implements OnInit {
  @Input() mountainsColor;

  constructor() { }

  ngOnInit() {
  }

  getMountainsColor() {
    return {
      'background': this.mountainsColor
    };
  }
}
