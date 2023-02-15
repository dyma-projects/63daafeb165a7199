import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-exercice-1',
  templateUrl: './exercice-1.component.html',
})
export class Exercice1Component implements OnInit {
  // Ce Hostlistener permet d'écouter un événement sur l'objet window global;
  // Peut-être que cela vous sera utile pour votre directive ;)
  // (Il vous faudra bien sûr le déplacer dans celle-ci)

  // @HostListener('window:click', ['$event']) windowClick($event) {
  //   console.log($event);
  // }

  constructor() {}

  ngOnInit() {}
}
