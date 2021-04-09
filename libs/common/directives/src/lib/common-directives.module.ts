import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxDirective } from './parallax.directive';
import { PreloadDirective } from './preload/preload.directive';
import { NumberDirective } from './number/number.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ParallaxDirective, PreloadDirective, NumberDirective],
  exports: [ParallaxDirective, PreloadDirective, NumberDirective]
})
export class CommonDirectivesModule {}
