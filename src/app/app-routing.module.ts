import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Componente/listar/listar.component';
import { GuardarComponent } from './Componente/guardar/guardar.component';
import { EditarComponent } from './Componente/editar/editar.component';
import { EliminarComponent } from './Componente/eliminar/eliminar.component';

const routes: Routes = [
  {path: 'listar', component: ListarComponent},
  {path: 'guardar', component: GuardarComponent},
  {path: 'editar', component: EditarComponent},
  {path: 'eliminar', component: EliminarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
