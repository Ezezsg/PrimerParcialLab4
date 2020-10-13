import { Component, EventEmitter, OnInit, Output  } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Pais } from '../../models/pais.model';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  listadoPaises: Pais[];
  @Output() seleccionarPais = new EventEmitter<Pais>();

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
  	this.firebaseService.obtenerPaises().subscribe((paises: any) =>{
  		console.log(paises);
  		this.listadoPaises = paises;
  	});
  }

  paisSelec(pais) {
    this.seleccionarPais.emit(pais);
  }


}
