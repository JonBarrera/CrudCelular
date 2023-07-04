import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Celular } from 'src/app/Entidad/Celular';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{

  celular : Celular = new Celular();

  constructor(private router : Router, private service: ServiceService) {}

  ngOnInit(): void {
    this.buscar();
  }
  //Metodo; Primero hay que buscar la informacion por medio de id
  buscar(){
    let idCelular = localStorage.getItem('id');
    this.celular.idCelular = Number(idCelular);

    //Consumir la Api
    this.service.buscarC(this.celular).subscribe(data =>{
      this.celular = data;
    });
  }

  //Metodo; Despues de buscar bamos a paras a la api de editar
  editar(){
    this.service.editarC(this.celular).subscribe(data =>{
      alert("Se edito el Celular" +this.celular.marca);
      //Redireccionamiento
      this.router.navigate(['listar']);
    });
  }
}
