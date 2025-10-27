import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPaginainterface } from '../interface/infoPagina.interface';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { catchError, of, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class InfoPagina {

  info : InfoPaginainterface = {};
  cargada = false;
  error: any = null;

  constructor(private http: HttpClient, private firestore: Firestore) {
    console.log('Servicio de info pagina listo');

    // 📄 Carga de datos locales (JSON)
    try {
      this.http
        .get<InfoPaginainterface>('assets/data/data-pagina.json')
        .pipe(
          tap((resp) => console.log('📄 JSON recibido:', resp)),
          catchError((err) => {
            console.error('❌ Error cargando data-pagina.json', err);
            this.error = err;
            this.cargada = false; // ❌ error, no se cargó
            return of({} as InfoPaginainterface);
          })
        )
        .subscribe((resp) => {
          this.info = resp;
          this.cargada = true; // ✅ se cargó exitosamente
          console.log('✅ JSON cargado. company:', this.info?.company);
        });
    } catch (e) {
      console.error('❌ Excepción al iniciar la carga del JSON:', e);
      this.error = e;
      this.cargada = false;
    }

  
  
  }
  
  // 📡 Lee la colección "equipo" en Firestore
  obtenerEquipo() {
    try {
      const equipoRef = collection(this.firestore, 'equipo');
      return collectionData(equipoRef, { idField: 'id' }).pipe(
        tap((docs) => console.log(`📡 Firestore equipo (${docs.length}) docs`, docs)),
        catchError((err) => {
          console.error('❌ Error consultando Firestore (equipo):', err);
          // Devuelve un arreglo vacío para no romper la app
          return of([] as any[]);
        })
      );
    } catch (e) {
      console.error('❌ Excepción al preparar consulta Firestore (equipo):', e);
      return of([] as any[]);
    }
  }
  

}
