import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableOfContentsComponent } from './table-of-contents/table-of-contents.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TableOfContentsComponent],
  exports: [TableOfContentsComponent]
})
export class CommonUiTableOfContentsModule {}
