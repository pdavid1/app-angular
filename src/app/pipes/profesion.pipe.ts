import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'profesion'
})
export class ProfesionPipe implements PipeTransform {

  transform(value: number, listaProfesiones:any[]): string {
    console.log(listaProfesiones);

    let respuesta = "";
    listaProfesiones.forEach(profesion => {
      if(profesion.idProfesion == value ) {
        respuesta = profesion.profesion;
      }
    });

    return respuesta; //value + ' - ';
  }

}
