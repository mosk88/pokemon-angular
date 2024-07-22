import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { IListPokemons } from '../../shared/entities';
import { ListPokemonService } from '../../shared/list-pokemon.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent implements OnInit {
 listPokemon: IListPokemons[] = [];
  service = inject(ListPokemonService);

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.service.fetchAll().subscribe((data) => {
      this.listPokemon = data.slice(1, 6);
    });
  }
}
