import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmarineComponent } from './submarine/submarine.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SubmarineComponent],
  exports: [SubmarineComponent]
})
export class CommonUiSubmarineModule {}
