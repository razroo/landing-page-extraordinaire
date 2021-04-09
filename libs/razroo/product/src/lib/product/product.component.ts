import { Component, OnInit } from '@angular/core';
import { TimeUntilService } from '@razroo/common/services';

@Component({
  selector: 'razroo-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  color='linear-gradient(0deg, #000a15 0%, #001429 100%)';
  timeUntil: any;

  constructor(private timeUntilService: TimeUntilService) {}

  ngOnInit() {
    this.timeUntilService.determineTimeUntil().subscribe((data) => {
      this.timeUntil = data;
    });
  }
}
