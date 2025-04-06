import { Component } from '@angular/core';

@Component({
  selector: 'app-propiedades',
  imports: [],
  templateUrl: './propiedades.component.html',
  styleUrl: './propiedades.component.css'
})
export class PropiedadesComponent {
  estaDeshabilitado = false;
  esEditable = true;
  mensaje="";

  over(){
    alert("Mouse Over");
  }

  mousedown(){
    this.mensaje = "Mouse Presionado";
  }
}
