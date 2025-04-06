import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-segundo',
  imports: [],
  templateUrl: './segundo.component.html',
  styleUrl: './segundo.component.css'
})
export class SegundoComponent {
  router: ActivatedRoute = inject(ActivatedRoute);
  id=0;
  cod=0;
  constructor(){
    this.id = this.router.snapshot.params['id'];
    this.id = this.router.snapshot.params['cod'];
  }
}
