import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPaginainterface } from '../interface/infoPagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPagina {

  info : InfoPaginainterface = {};
  cargada = false;
  error: any = null;
  
  constructor(private http: HttpClient) {
    console.log('Servicio de info pagina listo');

  this.http.get('assets/data/data-pagina.json').subscribe({
    next: (resp: InfoPaginainterface) => {
      console.log('response ws:', resp);
      this.info = resp;
      this.cargada = true;        // ✅ se cargó exitosamente
      console.log('company:', this.info?.company);
    },
    error: (err) => {
      console.error('Error cargando data-pagina.json', err);
      this.error = err;
      this.cargada = false;       // ❌ error, no se cargó
    }
  });
  }

}
