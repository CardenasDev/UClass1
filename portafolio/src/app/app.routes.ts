import { Routes } from '@angular/router';
import { Portafolio } from './pages/portafolio/portafolio';
import { About } from './pages/about/about';
import { Item } from './pages/item/item';

export const routes: Routes = [
	{ path: '', component: Portafolio },
	{ path: 'about', component: About },
	{ path: 'item', component: Item },
	{ path: '**', redirectTo: '', pathMatch: 'full' }
];
