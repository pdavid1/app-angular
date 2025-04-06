import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PadreComponent } from './comunicacion/padre/padre.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PadreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular';
}
