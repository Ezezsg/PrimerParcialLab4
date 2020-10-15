import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';

@Component({
  selector: 'app-borrar-actor',
  templateUrl: './borrar-actor.component.html',
  styleUrls: ['./borrar-actor.component.css']
})
export class BorrarActorComponent implements OnInit {

  @Output() borrarActor = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  onBorrar(){
  	this.borrarActor.emit(true);
  }
}
