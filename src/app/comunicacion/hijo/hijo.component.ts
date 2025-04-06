import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  imports: [],
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  @Input() profesion = '';
  @Output() antiguedadEvent = new EventEmitter<number>();

  obtenerAntiguedad() {
    this.antiguedadEvent.emit(10);
  }
}
