import { UsuarioService } from './../../servicios/usuario.service';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  listar = "";

  constructor(private router:Router, private usuarioService: UsuarioService) {
    this.listar = this.usuarioService.obtenerUsuarios().join(',');

    // let data = this.usuarioService.obtenerUsuariosUrl();
    // console.log('.....',data);

    this.usuarioService.obtenerUsuariosUrl().subscribe(data => {
      console.log('.....',data);
    })

  }

  //usuarioService = inject(UsuarioService);

  iraPrimero() {
    this.router.navigate(['primero']);
  }

  iraSegundo() {
    this.router.navigate(['segundo',15,25]);
  }

}
