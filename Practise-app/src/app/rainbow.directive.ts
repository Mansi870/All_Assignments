import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]',
})
export class RainbowDirective {
  constructor() {}
  @HostBinding('style.color') color!: string;
  @HostBinding('style.border') border!: string;

  @HostListener('keydown') onKeyDown() {
    let red = Math.floor(Math.random() * 225);
    let green = Math.floor(Math.random() * 225);
    let blue = Math.floor(Math.random() * 225);

    let hexValue = this.rgbToHex(red, green, blue);
    this.color = this.rgbToHex(red, green, blue);
    this.border = '20px soild' + this.rgbToHex(red, green, blue);
  }
  rgbToHex(red: number, green: number, blue: number) {
    let hexValue =
      '#' +
      this.numberToHex(red) +
      this.numberToHex(green) +
      this.numberToHex(blue);
    return hexValue;
  }
  numberToHex(num: number) {
    let hex = num.toString(16);
    hex = hex.length == 1 ? '0' + hex : hex;
    return hex;
  }
}
