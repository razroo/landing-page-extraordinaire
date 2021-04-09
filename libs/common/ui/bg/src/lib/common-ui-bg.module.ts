import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgComponent } from './bg/bg.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BgComponent],
  exports: [BgComponent]
})
export class CommonUiBgModule {}
