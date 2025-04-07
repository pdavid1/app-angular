import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Programador } from '../programador';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plantilla',
  imports: [FormsModule, CommonModule],
  templateUrl: './plantilla.component.html',
  styleUrl: './plantilla.component.css'
})
export class PlantillaComponent {

  programador = new Programador();
  especialidades = ['Front-end', 'Backend', 'Ambos'];

  enviado=false;
  enviar(){
    this.enviado = true;
  }

}
