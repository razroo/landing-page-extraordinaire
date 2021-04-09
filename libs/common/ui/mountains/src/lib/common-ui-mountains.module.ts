import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MountainsComponent } from './mountains/mountains.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MountainsComponent],
  exports: [MountainsComponent]
})
export class CommonUiMountainsModule {}
