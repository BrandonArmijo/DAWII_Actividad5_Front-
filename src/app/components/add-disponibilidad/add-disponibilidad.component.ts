import { Component, OnInit } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Ciclo } from 'src/app/models/ciclo.model';
import { Disponibilidad } from 'src/app/models/disponibilidad.model';
import { Usuario } from 'src/app/models/usuario.model';
import { CicloService } from 'src/app/services/ciclo.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import { DisponibilidadService } from 'src/app/services/disponibilidad.service';

@Component({
  selector: 'app-add-disponibilidad',
  templateUrl: './add-disponibilidad.component.html',
  styleUrls: ['./add-disponibilidad.component.css']
})
export class AddDisponibilidadComponent implements OnInit {

  ciclos : Ciclo[] = [];
  usuarios : Usuario[] = [];

  disponibilidad: Disponibilidad = { 
    ciclo:{
      idCiclo:-1
      /*
      nombre:"-1",
      estado:"-1"
      */
    },
    usuario:{
      idUsuario:-1
      /*nombres:"-1",
      apaterno:"-1",
      amaterno:"-1",
      fechaNacimiento:"-1", 
      fechaRegistro:"-1",
      email:"-1",
      estado:"-1",
      celular:"-1",
      direccion:"-1",
      login:"-1",
      password:"-1",
      dni:"-1",
      idTipoUsuario:-1,
      idUbigeo:-1
      */
    }
  };

  

  constructor(private cicloService:CicloService, 
    private usuarioService:UsuarioService,
    private disponibilidadService:DisponibilidadService) { 

    this.cicloService.listarTodos().subscribe(
      (ciclos) => this.ciclos = ciclos
    );
    this.usuarioService.listarTodos().subscribe(
      (usuarios) => this.usuarios = usuarios
    );
  }

  registraDisponibilidad(){
    console.log(this.disponibilidad);
    
    this.disponibilidadService.registrar(this.disponibilidad).subscribe(
        response => {
            console.log(response.mensaje);
            alert(response.mensaje);
          },
          error => {
            console.log(error);
          },
    );
}



  ngOnInit(): void {
  }

}
