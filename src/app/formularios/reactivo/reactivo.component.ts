import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms'

@Component({
  selector: 'app-reactivo',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactivo.component.html',
  styleUrl: './reactivo.component.scss'
})
export class ReactivoComponent {
  //   usuarioForm = new FormGroup({
  //   nombre: new FormControl(''),
  //   apellido: new FormControl(''),
  //   direccion: new FormGroup({
  //     ciudad: new FormControl(''),
  //     departamento: new FormControl('')
  //   })

  // });
  usuarioForm: FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.usuarioForm = this.formBuilder.group({
      nombre:['', Validators.required],
      apellido:['', Validators.required],
       direccion: this.formBuilder.group({
         ciudad:[''],
         departamento:['']
      })
    });
  }

  guardar(){
    console.log(this.usuarioForm);
    console.log(this.usuarioForm.value);
  }

  actualizar(){
      // this.usuarioForm.setValue({
      // nombre: '',
      // apellido: '',
      // direccion: {
      //   ciudad: '',
      //   departamento:''
      // }
      // })
      this.usuarioForm.patchValue({
        nombre: 'Pedro'

    })
  }

}
