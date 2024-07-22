import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IListPokemons } from '../../shared/entities';
import { ListPokemonService } from '../../shared/list-pokemon.service';


@Component({
  selector: 'app-list-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-pokemon.component.html',
  styleUrl: './list-pokemon.component.css'
})
export class ListPokemonComponent implements OnInit {
 listPokemon: IListPokemons[] = [];
  service = inject(ListPokemonService);

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.fetchAll().subscribe((data) => {
      this.listPokemon = data.slice(1, 20);
    });
  }

}
