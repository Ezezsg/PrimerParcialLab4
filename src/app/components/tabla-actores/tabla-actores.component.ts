import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.css']
})
export class TablaActoresComponent implements OnInit {
  
  @Input() listaActores:Actor[];
  @Output() actorSeleccionado = new EventEmitter<Actor>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarActor(actor:Actor){
    this.actorSeleccionado.emit(actor);
  }

}
