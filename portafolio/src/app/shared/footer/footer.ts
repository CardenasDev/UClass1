import { Component } from '@angular/core';
import { InfoPagina } from '../../services/info-pagina';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css'
})
export class Footer {

  year: number = new Date().getFullYear();

    constructor(public infoPaginaService: InfoPagina) {}
  
    ngOnInit() {
      console.log('Footer component initialized');
    }
}
