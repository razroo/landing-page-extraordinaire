import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchPadComponent } from './launch-pad/launch-pad.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LaunchPadComponent],
  exports: [LaunchPadComponent]
})
export class CommonUiLaunchPadModule {}
