import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    //console.log( 'Servicio de infoPagina Listo');

this.cargarInfo();
this.cargarEquipo();

  }

  private cargarInfo(){
        //leer el archivo JSON
        this.http.get ('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {
          this.cargada = true;
          this.info = resp;

        });

      }

  private cargarEquipo(){
        //leer el archivo JSON
        this.http.get ('https://angular-html-dd422.firebaseio.com/equipo.json')
        .subscribe( (resp: any[]) => {

          this.equipo = resp;
          console.log(resp);

        });
  }


}

