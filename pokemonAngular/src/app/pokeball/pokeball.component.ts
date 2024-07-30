import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListPokemonService } from '../../shared/list-pokemon.service';
import { IListPokemons } from '../../shared/entities';
import { PokeballService } from '../../shared/pokeball.service';
import { PokemonDetailsComponent } from '../pokemon-details/pokemon-details.component';

@Component({
  selector: 'app-pokeball',
  standalone: true,
  imports: [RouterLink,CommonModule,PokemonDetailsComponent],
  templateUrl: './pokeball.component.html',
  styleUrl: './pokeball.component.css'
})
export class PokeballComponent implements OnInit {
  pokeballs: IListPokemons[] = [];
  service = inject(PokeballService);
  pokemon =[];

  ngOnInit(): void {
    this.pokeballs = this.service.getPokeball();
    
  }



}
