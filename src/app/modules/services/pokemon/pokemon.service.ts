import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

declare var require: any;
const Pokedex = require('pokeapi-js-wrapper');
const P = new Pokedex.Pokedex();

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() {    
  }

  getAllPokemon(): any {     
    const interval = {
      limit: 151
    };   
    return P.getPokemonsList(interval);
  }

  getPokemonDetails(pokemonName: string): any {
    return P.getPokemonByName(pokemonName);
  }
}
