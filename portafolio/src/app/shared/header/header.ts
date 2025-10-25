import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { InfoPagina } from '../../services/info-pagina';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit {
  constructor(public infoPaginaService: InfoPagina) {}

  ngOnInit() {
    console.log('Header component initialized');
  }

}
