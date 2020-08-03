import { PokemonService } from './../../services/pokemon/pokemon.service';
import { Component, OnInit } from '@angular/core';
import { Pokemon } from './../../models/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemonList: Pokemon[];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getAllPokemon();
  }

  getAllPokemon(): void {
    this.pokemonService.getAllPokemon().then(pokemonList => { 
      this.pokemonList = pokemonList.results;
      console.log(this.pokemonList);
    });
  }
}
