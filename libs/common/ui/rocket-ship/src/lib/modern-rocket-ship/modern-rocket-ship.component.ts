import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'razroo-modern-rocket-ship',
  templateUrl: './modern-rocket-ship.component.html',
  styleUrls: ['./modern-rocket-ship.component.scss']
})
export class ModernRocketShipComponent implements OnInit {
  @Input() showAnimation;

  constructor() { }

  ngOnInit() {
  }

}
