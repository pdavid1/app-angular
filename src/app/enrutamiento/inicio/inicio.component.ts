import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  constructor(private router:Router) {
  }

  iraPrimero() {
    this.router.navigate(['primero']);
  }
  iraSegundo() {
    this.router.navigate(['segundo',15,25]);
  }

}
