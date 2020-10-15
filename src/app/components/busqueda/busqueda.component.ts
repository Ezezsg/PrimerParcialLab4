import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/models/actor.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  public listaActores:Actor[];
  public actorSeleccionado:Actor;

  constructor(
    private firebaseService: FirebaseService   
  ) { }

  ngOnInit(): void {
    this.firebaseService.getActores().subscribe((actores: any) => {
      this.listaActores = actores;
    });
  }

  actorSelec(actor){
    this.actorSeleccionado = actor;
    console.log(this.actorSeleccionado);
  }

  borrarAct(boolean){
    if(boolean){
      this.firebaseService.deleteActor(this.actorSeleccionado.id).then(x =>{
        console.log("OK");
        this.actorSeleccionado = null;
      })
      .catch(e =>{
        console.log("ERROR ->", e);
      });
    }
  }
}
