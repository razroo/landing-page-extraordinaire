import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LakeComponent } from './lake/lake.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LakeComponent],
  exports: [LakeComponent]
})
export class CommonUiLakeModule {}
