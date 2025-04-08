import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ResaltarDirective } from '../resaltar.directive';

@Component({
  selector: 'app-directiva',
  imports: [CommonModule, ResaltarDirective],
  templateUrl: './directiva.component.html',
  styleUrl: './directiva.component.css'
})
export class DirectivaComponent {

  esActivo = true;

  estilos:Record<string,string>={};

  color = "cyan";

  ngOnInit(){
    this.estilos={
      'color':this.esActivo?'red':'blue',
      'font-size':this.esActivo?'20px':'10px'
    }
  }
}
