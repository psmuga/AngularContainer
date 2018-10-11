import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCardHover]'
})
export class CardHoverDirective {
  @HostBinding('class.card-outline-danger') private ishovering: boolean;
  // tslint:disable-next-line:no-input-rename
  @Input('appCardHover') config: Object = {
    querySelector: '.card-text'
  };
  // https://codecraft.tv/courses/angular/custom-directives/inputs-and-configuration/
  
  constructor(private el: ElementRef, private renderer: Renderer) {
    renderer.setElementStyle(el.nativeElement, 'background-color', '#ccc');
  }

  @HostListener('mouseover') onMouseOver() {
    // let part = this.el.nativeElement.querySelector(this.config.querySelector);
    // this.renderer.setElementStyle(part, 'display', 'block');
    this.renderer.setElementStyle(this.el.nativeElement, 'opacity', '0.8');
    this.renderer.setElementStyle(this.el.nativeElement, 'transition', 'all ease-in-out 300ms');
    this.ishovering = true;
  }

  @HostListener('mouseout') onMouseOut() {
    // let part = this.el.nativeElement.querySelector(this.config.querySelector);
    // this.renderer.setElementStyle(part, 'display', 'none');
    this.renderer.setElementStyle(this.el.nativeElement, 'opacity', '1');
    this.renderer.setElementStyle(this.el.nativeElement, 'transition', 'all ease-in-out 300ms');
    this.ishovering = false; 
  }

}