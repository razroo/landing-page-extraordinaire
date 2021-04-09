import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RocketShipComponent } from './rocket-ship/rocket-ship.component';
import { LandingRocketComponent } from './landing-rocket/landing-rocket.component';
import { ModernRocketShipComponent } from './modern-rocket-ship/modern-rocket-ship.component';

@NgModule({
  imports: [CommonModule],
  declarations: [RocketShipComponent, LandingRocketComponent, ModernRocketShipComponent],
  exports: [RocketShipComponent, LandingRocketComponent, ModernRocketShipComponent]
})
export class CommonUiRocketShipModule {}
