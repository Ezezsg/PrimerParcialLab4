import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-tabla-actor',
  templateUrl: './tabla-actor.component.html',
  styleUrls: ['./tabla-actor.component.css']
})
export class TablaActorComponent implements OnInit {

  @Output() seleccionar = new EventEmitter<Actor>();
  listadoActores: Actor[] = [];
  constructor(
  	private firebaseService: FirebaseService
  ) { }

  ngOnInit(): void {
  	this.getActores();
  }

  getActores() {
    this.firebaseService.getActores()
    .subscribe((actoresSnapshot) => {
      actoresSnapshot.forEach( doc => this.listadoActores.push(<Actor>doc.data()) );
    });
  }

  seleccionarActor(actor: Actor) {
    this.seleccionar.emit(actor);
  }

}
