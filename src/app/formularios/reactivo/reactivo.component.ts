import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  imports: [ReactiveFormsModule],
  templateUrl: './reactivo.component.html',
  styleUrl: './reactivo.component.css',
})
export class ReactivoComponent {
  usuarioForm!: FormGroup;
  // usuarioForm = new FormGroup({
  //   nombre: new FormControl(''),
  //   apellido: new FormControl(''),
  //   direccion: new FormGroup({
  //     ciudad: new FormControl(''),
  //     departamento: new FormControl(''),
  //   }),
  // });

  constructor(private formBuilder:FormBuilder){
    this.usuarioForm = this.formBuilder.group({
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      direccion: this.formBuilder.group({
        ciudad:[''],
        departamento:['']
      }),
    });
  }

  guardar() {
    console.log(this.usuarioForm);
    console.log(this.usuarioForm.value);
  }

  actualizar() {
      // this.usuarioForm.setValue({
      //   nombre:'aaaaaaaaa',
      //   apellido: 'bbbbbbbb',
      //   direccion: {
      //     ciudad:'sssss',
      //     departamento: 'aaaaaaa'
      //   }
      // });
      this.usuarioForm.patchValue({
        nombre: 'pedro',
      })
  }
}
