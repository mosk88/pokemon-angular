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
  
  pokemonFinded: IListPokemons|undefined;
  ngOnInit(): void {
    this.pokemonfind();
  }

  pokemonfind(): void {
    this.serviceP.fetchAll().subscribe((data) => {
      
      this.pokemons = data.slice(1, 151);
    });
  }


}
   
