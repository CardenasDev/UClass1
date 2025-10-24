import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../app/shared/header/header';
import { Footer } from './shared/footer/footer';
import { Portafolio } from './pages/portafolio/portafolio';
import { About } from './pages/about/about';
import { Item } from './pages/item/item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer,Portafolio, About, Item],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portafolio');
}
