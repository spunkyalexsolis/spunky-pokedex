import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PokedexHomeComponent } from './pokedex-home/pokedex-home.component';


const routes: Routes = [
  {
    path: 'pokedex-home',
    component: PokedexHomeComponent,
  },
  {
    path: 'pokemon-list',
    component: PokemonListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PokedexRoutingModule { }