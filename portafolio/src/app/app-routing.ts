import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { Portafolio } from "./pages/portafolio/portafolio";
import { About } from "./pages/about/about";
import { Item } from "./pages/item/item";

const app_routes: Routes = [
{    path: '', component: Portafolio},
{    path: 'about', component: About},
{    path: 'item', component: Item},
  { path: '**', redirectTo: '', pathMatch: 'full' }
]
@NgModule({
    imports: [RouterModule.forRoot(app_routes)],
})
export class AppRoutingModule {

 }