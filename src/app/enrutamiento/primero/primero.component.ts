import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-primero',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './primero.component.html',
  styleUrl: './primero.component.css'
})
export class PrimeroComponent {

}
