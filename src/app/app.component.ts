import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlujoComponent } from './controles/flujo/flujo.component';
import { PropiedadesComponent } from './controles/propiedades/propiedades.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FlujoComponent, PropiedadesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-angular';
}
