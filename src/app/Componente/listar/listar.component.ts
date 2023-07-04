import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Celular } from 'src/app/Entidad/Celular';
import { ServiceService } from 'src/app/Servicios/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  constructor(private router : Router, private service : ServiceService){}
  celular !: Celular[];

  ngOnInit(): void {
    //Indicar la accion
    this.listar();
  }
//Consumir los servicios
listar(){
  this.service.listarC().subscribe(data=>{
    this.celular = data;
    console.log("LISTA DE  CELULARES"+JSON.stringify(data));
  });
  }//Cierra listar()

  editar(celular : Celular){
    localStorage.setItem("id", celular.idCelular.toString());
    this.router.navigate(["editar"]);//Posisionamiento ruteo "Redireccionamiento"
  }//Cierra editar()

  eliminar(celular : Celular){
    localStorage.setItem("id", celular.idCelular.toString());
    this.router.navigate(["eliminar"]);//Posisionamiento ruteo "Redireccionamiento"
  }//Cierra eliminar()

}
