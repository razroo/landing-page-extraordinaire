import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[razrooParallax]'
})
export class ParallaxDirective implements OnInit{
  @Input('ratio') parallaxRatio : number = 1;
  initialHeight: number = 0;
  distanceFromElementToTopOfDocument: number = 0;

  constructor(private elementRef : ElementRef) {}

  ngOnInit() {
    this.distanceFromElementToTopOfDocument =
      this.elementRef.nativeElement.getBoundingClientRect().y;

    // as these are squares initial height, will be initial width
    this.initialHeight = this.elementRef.nativeElement.getBoundingClientRect().width;
  }

  @HostListener("window:scroll", ["$event"])
  onWindowScroll(event){
    const windowScroll = (window.scrollY * this.parallaxRatio);

      // 40, because we want to give the user a bit of a bugger
      if(windowScroll <= (this.distanceFromElementToTopOfDocument - 40)) {
        this.elementRef.nativeElement.style.height = this.initialHeight - (windowScroll) + 'px';
      }
  }

}
