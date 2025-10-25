import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { Header } from '../app/shared/header/header';
import { Footer } from './shared/footer/footer';


import { InfoPagina } from './services/info-pagina';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio');
  constructor( public infoPaginaService: InfoPagina) {}
}
