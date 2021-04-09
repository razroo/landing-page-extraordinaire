import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticleRainComponent } from './particle-rain/particle-rain.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ParticleRainComponent],
  exports: [ParticleRainComponent]
})
export class CommonUiParticlesModule {}
