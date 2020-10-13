import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Actor } from 'src/app/models/actor.model';
import { Pais } from 'src/app/models/pais.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-alta-actor',
  templateUrl: './alta-actor.component.html',
  styleUrls: ['./alta-actor.component.css']
})
export class AltaActorComponent implements OnInit {

  actor: Actor;
  seleccionarPais: any;
  actorForm: FormGroup;
  check: boolean = false;

  constructor(
    private firebaseService: FirebaseService,
    private formBuilder:FormBuilder
    ) { 
    this.actorForm = formBuilder.group({
    nombre: ["", Validators.required],
    apellido: ["", Validators.required],
    sexo: ["", Validators.required],
    fechaDeNacimiento: ["", Validators.required],
  })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    
    this.actor = new Actor(
      Guid.create().toString(), 
      this.actorForm.get("nombre").value, 
      this.actorForm.get("apellido").value, 
      this.actorForm.get("sexo").value, 
      this.actorForm.get("fechaDeNacimiento").value, 
      this.seleccionarPais.name,
      'https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg'

    );
    this.firebaseService.createActor(this.actor)
    .then( re => {
      console.log(re);
      this.actorForm.reset();
      this.seleccionarPais = null;
      this.check = false;
    })
    .catch( ex => console.log );
  }

  asignarPais(pais) {
    this.seleccionarPais = pais;
    this.check = true;
  }
}
