import { Component, inject, OnInit } from '@angular/core';
import { IListPokemons } from '../../shared/entities';
import { ListPokemonService } from '../../shared/list-pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit {

 listPokemon: IListPokemons[] = [];
  pokemonByType: { [key: string]: IListPokemons[] } = {};
  service = inject(ListPokemonService);

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.fetchAll().subscribe((data) => {
      this.listPokemon = data.slice(1, 4); // Limit to 20 Pokémon
      this.groupPokemonsByType();
    });
  }

  groupPokemonsByType() {
    this.pokemonByType = this.listPokemon.reduce((acc, pokemon) => {
      pokemon.types?.forEach(type => {
        if (!acc[type]) {
          acc[type] = [];
        }
        acc[type].push(pokemon);
      });
      return acc;
    }, {} as { [key: string]: IListPokemons[] });
  }
  
}
