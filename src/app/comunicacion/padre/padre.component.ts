import { Component } from '@angular/core';
import { HijoComponent } from '../hijo/hijo.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.scss'
})
export class PadreComponent {
  profesion_padre = "Arquitecto";

  antiguedad = 0;
  obtenerAntiguedadPadre(data: number){
    this.antiguedad = data;
  }
}
