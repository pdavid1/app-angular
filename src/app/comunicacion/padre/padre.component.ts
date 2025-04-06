import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
  profesion_padre = 'Arquitecto';
  antiguedad = 0;

  obtenerAntiguedadPadre(data:number) {
    this.antiguedad = data;
  }
}
