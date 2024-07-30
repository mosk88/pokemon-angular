import { Component, inject, OnInit } from '@angular/core';
import { IListPokemons } from '../../shared/entities';
import { ListPokemonService } from '../../shared/list-pokemon.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css'
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: IListPokemons | undefined;
  service = inject(ListPokemonService);
  route = inject(ActivatedRoute);
  ngOnInit(): void {
    this.getOnePokemon(); 
    
  }

  getOnePokemon() {
   const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.fetchOne(id).subscribe(data => {
      this.pokemon = data;
      
    });
   
  }
 
  
   goBack(){
      window.history.back();
    }
}
