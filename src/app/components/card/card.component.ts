import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { HeroModel } from 'src/app/service/hero.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //Los inputs nos permiten pasar valores desde el componente «padre» que utiliza dentro del el otro componente y así intercambiar datos entre estos dos componentes
  //una propiedad va hacer recibida desde afuera
  @Input() hero: HeroModel;

  //los output son los cambios de los hijos hacia los padres por medio de eventos personalizados, generados con propiedades @Output
  // nombre del evento que quiero que el padre este escuchando y es de tipo  EventEmitter; y va emetir un tipo de dato string
  @Output() selectHero: EventEmitter<string>;
  constructor() {
//inicializo el EventEmitter
this.selectHero = new EventEmitter();

   }

  ngOnInit() {
  }

  showHeroSon(){
    this.selectHero.emit(this.hero.id);
  }

}
