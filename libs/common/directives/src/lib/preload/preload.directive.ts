import { Directive, ElementRef, HostListener } from '@angular/core';
import { OnDemandPreloadService } from '@razroo/common/services';

@Directive({
  selector: '[razrooPreload]'
})
export class PreloadDirective {

  constructor(private elementRef : ElementRef,
              private onDemandPreloadService: OnDemandPreloadService) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    const pathName = this.elementRef.nativeElement.attributes.routerlink.value;
    this.onDemandPreloadService.startPreload(pathName);
  }
}
