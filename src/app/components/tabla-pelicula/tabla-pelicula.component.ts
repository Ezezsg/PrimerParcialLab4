import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pelicula } from 'src/app/models/pelicula.model';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {
  
  @Output() mostrar = new EventEmitter<Pelicula>();
  listadoPeliculas: Pelicula[] = [];
  subscription: Subscription;
  constructor(
  	private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  	this.getPeliculas();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  getPeliculas() {
    this.subscription = this.firebaseService.getPeliculas()
    .subscribe((peliculasSnapshot) => {
      const listaNueva: Pelicula[] = [];
      peliculasSnapshot.forEach( doc => listaNueva.push(<Pelicula>doc.payload.doc.data()) );
      this.listadoPeliculas = listaNueva;
    });
  }

  mostrarDetalle(pelicula: Pelicula) {
    this.mostrar.emit(pelicula);
  }

}
