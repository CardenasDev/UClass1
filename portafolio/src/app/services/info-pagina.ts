import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPagina {
  constructor(private http: HttpClient) {
    console.log('Servicio de info pagina listo');

    this.http.get('assets/data/data-pagina.json').subscribe({
      next: (resp: any) => console.log(resp),
      error: (err) => console.error('Error cargando data-pagina.json', err)
    });
  }

}
