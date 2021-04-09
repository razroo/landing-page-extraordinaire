import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoryComponent } from './factory/factory.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FactoryComponent],
  exports: [FactoryComponent]
})
export class CommonUiFactoryModule {}
