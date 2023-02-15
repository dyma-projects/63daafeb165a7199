import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  constructor(public el: ElementRef<any>) {}

  //Il semblerait que l'opérateur OR || ne fonctionne pas et qu'on ne puisse
  //écouter qu'un seul event à la fois ?
  // La solution 'window:keydown.ArrowDown' || 'window:keydown.ArrowUp' ne fonctionne pas

  @HostBinding('style.color') public colorName: string = '';

  @HostListener('window:keydown.ArrowDown', ['$event'])
  @HostListener('window:keydown.ArrowUp', ['$event'])
  @HostListener('window:keydown.ArrowRight', ['$event'])
  @HostListener('window:keydown.ArrowLeft', ['$event'])
  private colorChange(event: KeyboardEvent) {
    console.log('Key : ', event.code, 'color: ', this.colorName);

    if (event.code === 'ArrowDown') {
      this.el.nativeElement.style.color = 'goldenrod';
      //utilisation seule de HostListener
    }
    if (event.code === 'ArrowUp') {
      this.el.nativeElement.style.color = 'teal';
    }
    if (event.code === 'ArrowRight') {
      this.colorName = 'indianred';
      // Utilisation de Hostbinding
    }
    if (event.code === 'ArrowLeft') {
      this.colorName = 'pink';
    }
  }
}
