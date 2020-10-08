import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  unaPelicula: Pelicula;
  constructor() { }

  ngOnInit(): void {
  }

  mostrarDetalle(pelicula: Pelicula) {
    this.unaPelicula = pelicula;
  }

}
