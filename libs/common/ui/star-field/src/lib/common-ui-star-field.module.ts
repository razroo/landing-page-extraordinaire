import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarFieldComponent } from './star-field/star-field.component';

@NgModule({
  imports: [CommonModule],
  declarations: [StarFieldComponent],
  exports: [StarFieldComponent]
})
export class CommonUiStarFieldModule {}
