import { Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { HomeComponent } from './home/home.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { Error404Component } from './error404/error404.component';
import { PokeballComponent } from './pokeball/pokeball.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    { path: 'pokemon', component: ListPokemonComponent },
    { path: 'pokeball', component: PokeballComponent },
  { path: 'pokedex', component: PokedexComponent },
      { path: 'tableau-de-bord', component: TableauDeBordComponent },
    { path: 'pokemon/:id', component: PokemonDetailsComponent },
    { path: '**', component: Error404Component },  
];
