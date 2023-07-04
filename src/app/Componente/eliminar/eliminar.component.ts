import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Celular } from 'src/app/Entidad/Celular';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit{
  celular : Celular = new Celular();

  constructor(private router : Router, private service: ServiceService) {}

  ngOnInit(): void {
    this.buscar();
  }
  //Metodo; Primero hay que buscar la informacion por medio de id, para poder borrar
  buscar(){
    let idCelular = localStorage.getItem('id');
    this.celular.idCelular = Number(idCelular);

    //Consumir la Api
    this.service.buscarC(this.celular).subscribe(data =>{
      this.celular = data;
    });
  }

  //Metodo; Despues de buscar bamos a paras a la api de eliminar
  eliminar(){
    this.service.eliminarC(this.celular).subscribe(data =>{
      alert("Se elimino el Celular" +this.celular.marca);
      //Redireccionamiento a componente de listar
      this.router.navigate(['listar']);
    });
  }
}
