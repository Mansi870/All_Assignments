import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]',
})
export class HighLightDirective {
  constructor(private e1: ElementRef) {}
  @HostListener('mouseenter') changeText() {
    this.highLight('100px');
    this.e1.nativeElement.style.color = 'red';
  }
  @HostListener('mouseleave') changeTextToOriginal() {
    this.highLight('50px');
    this.e1.nativeElement.style.color = 'yellow';
  }
  highLight(fontsize: string) {
    this.e1.nativeElement.style.fontSize = fontsize;
  }
}
function changeText() {
  throw new Error('Function not implemented.');
}
