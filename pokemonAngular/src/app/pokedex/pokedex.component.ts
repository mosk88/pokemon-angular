import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListPokemonService } from '../../shared/list-pokemon.service';
import { IListPokemons } from '../../shared/entities';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchePipe } from '../../shared/searche.pipe';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule,SearchePipe],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent  {

service = inject(ListPokemonService)
  searchTerm: string = '';
  pokemons: IListPokemons[] = [];
  serviceP = inject(ListPokemonService);
  
  pokemonFinded: any = null;
  ngOnInit(): void {
    this.pokemonfind();
  }

  pokemonfind(): void {
    this.serviceP.fetchAll().subscribe((data) => {
      if(data)
      this.pokemons = data.slice(1, 25);
    });

  }
  selectPokemon() {
this.pokemonFinded = this.pokemons
  //  this.pokemonFinded = this.pokemons.find((pokemon) => {
  //     return pokemon.name.fr === this.searchTerm;
  //   });
  //   if (this.pokemonFinded) {
  //     this.searchTerm = this.pokemonFinded.name.fr;

  //   } else {

  //     this.searchTerm = '';

  // }

  }
   onSearch(): void {
    const filteredPokemons = this.pokemons.filter(pokemon =>
      pokemon.name.fr.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
    if (filteredPokemons.length === 1) {
      this.pokemonFinded = filteredPokemons[0];
    } else {
      this.pokemonFinded = null;
    }
  }


}
   
