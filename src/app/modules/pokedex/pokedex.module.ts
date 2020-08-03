import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexRoutingModule } from './pokedex-routing.module';
import { PokemonService } from '../services/pokemon/pokemon.service';
import { PokedexHomeComponent } from '../pokedex/pokedex-home/pokedex-home.component';
import { PokemonListComponent } from '../pokedex/pokemon-list/pokemon-list.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    PokedexHomeComponent,
    PokemonListComponent,
    PokemonCardComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule,
    MatCardModule
  ],
  providers: [
    PokemonService
  ]
})
export class PokedexModule { }
