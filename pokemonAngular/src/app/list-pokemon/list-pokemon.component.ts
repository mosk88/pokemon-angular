import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { IListPokemons } from '../../shared/entities';
import { ListPokemonService } from '../../shared/list-pokemon.service';
import { RouterLink } from '@angular/router';
import { PokeballService } from '../../shared/pokeball.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent implements OnInit,OnDestroy {
  listPokemon: IListPokemons[] = [];
  pokeball : IListPokemons[] = [];
  service = inject(ListPokemonService);
  pokeballService = inject(PokeballService);
  dataSub!: Subscription;

  ngOnInit(): void {
    this.dataSub = this.service.fetchAll().subscribe((data) => {
      this.listPokemon = data.slice(1, 22);
    });
    
  }

  getList() {
    this.service.fetchAll().subscribe((data) => {
      this.listPokemon = data.slice(1, 22);
    });
   }
 getDelete(id: number): void {
    this.listPokemon = this.listPokemon.filter(pokemon => pokemon.pokedex_id !== id);
}

  addPokemons(pokemon: IListPokemons): void {
    this.pokeballService.addPokemon(pokemon);
  }

  ngOnDestroy(): void {
    this.dataSub.unsubscribe();
  }

}
