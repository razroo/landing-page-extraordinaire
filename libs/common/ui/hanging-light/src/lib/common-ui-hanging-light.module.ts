import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HangingLightComponent } from './hanging-light/hanging-light.component';
import { HangingLightTopComponent } from './hanging-light-top/hanging-light-top.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HangingLightComponent, HangingLightTopComponent],
  exports: [HangingLightComponent, HangingLightTopComponent]
})
export class CommonUiHangingLightModule {}
