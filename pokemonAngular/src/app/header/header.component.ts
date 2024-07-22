import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ListPokemonComponent } from '../list-pokemon/list-pokemon.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
