import { Routes } from '@angular/router';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
     {path:'',component:HomeComponent},
    {path:'list-pokemon',component:ListPokemonComponent},
];
