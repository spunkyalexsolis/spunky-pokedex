import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from './../../models/pokemon';
import { PokemonService } from './../../services/pokemon/pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent implements OnInit {

  @Input() pokemon: Pokemon;

  pokemonDetails: any;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemonDetails(this.pokemon.name);
  }

  getPokemonDetails(pokemonName): void {
    this.pokemonService.getPokemonDetails(pokemonName).then(pokemonDetails => { 
      this.pokemonDetails = pokemonDetails;
      console.log(this.pokemonDetails);
    });
  }
}
