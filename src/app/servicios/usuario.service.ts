import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  usuarios = ['juan','carlos','pedro'];

  obtenerUsuarios(){
    return this.usuarios;
  }

  obtenerUsuarioUrl(){
    // this.http.get('https://rickandmortyapi.com/api',{responseType:'json'}).subscribe(data=>{
    //   console.log('---->', data);
    //   return data;
    // });

    return this.http.get('https://rickandmortyapi.com/api',{responseType:'json'});
  }

}
