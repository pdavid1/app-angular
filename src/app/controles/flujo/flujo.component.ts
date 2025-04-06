import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-flujo',
  imports: [CommonModule],
  templateUrl: './flujo.component.html',
  styleUrl: './flujo.component.css'
})
export class FlujoComponent {
  esAdmin = false;
  mensaje = "";

  ciudades = [{id:1, nombre: 'La Paz'},{id:2, nombre: 'Santa Cruz'},{id:3, nombre: 'Cochabamba'},{id:4, nombre: 'El Alto'}]

  guardar() {
    this.mensaje= "Datos Guardados"
  }
}
