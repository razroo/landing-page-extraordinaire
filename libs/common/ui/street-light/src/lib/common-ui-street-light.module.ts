import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StreetLightComponent } from './street-light/street-light.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StreetLightComponent],
  exports: [StreetLightComponent]
})
export class CommonUiStreetLightModule {}
