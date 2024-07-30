import { Injectable } from '@angular/core';
import { IListPokemons } from './entities';

@Injectable({
  providedIn: 'root'
})
export class PokeballService {

  pokeball: IListPokemons[] = [];
  
  
  getPokeball(): IListPokemons[] {
    return this.pokeball;
  }

  addPokemon(pokemon: IListPokemons): void {
    this.pokeball.push(pokemon);
  }

}
