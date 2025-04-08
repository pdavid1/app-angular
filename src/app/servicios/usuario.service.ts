import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) {}

  usuarios = ['Juan','Carlos','Pedro'];

  obtenerUsuarios() {
    return this.usuarios;
  }

  obtenerUsuariosUrl(){
    // this.http.get('https://jsonplaceholder.typicode.com/users', {responseType:'json'}).subscribe(data => {
    //   console.log('----> ', data);
    //   return data;
    // });

    return this.http.get('https://jsonplaceholder.typicode.com/users', {responseType:'json'});
  }
}
