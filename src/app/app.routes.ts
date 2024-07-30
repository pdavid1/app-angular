import { Routes } from '@angular/router';
import { InicioComponent } from './enrutamiento/inicio/inicio.component';
import { PrimeroComponent } from './enrutamiento/primero/primero.component';
import { SegundoComponent } from './enrutamiento/segundo/segundo.component';
import { PaginanoencontradaComponent } from './enrutamiento/paginanoencontrada/paginanoencontrada.component';

export const routes: Routes = [
  {
    path:'inicio',
    component:InicioComponent
  }
  ,
  {
    path:'primero',
    component:PrimeroComponent
  }
  ,
  {
    path:'segundo',
    component:SegundoComponent
  },
  {
    path:'',
    redirectTo:'inicio',
    pathMatch:'full'
  }
  ,
  {
    path:'**',
    component:PaginanoencontradaComponent
  }
];
