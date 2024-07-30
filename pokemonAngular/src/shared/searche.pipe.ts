import { Pipe, PipeTransform } from '@angular/core';
import { IListPokemons } from './entities';

@Pipe({
  name: 'searche',
  standalone: true
})
export class SearchePipe implements PipeTransform {

   transform(values:IListPokemons[], terms:string): IListPokemons[] {
    return values.filter(value=> value.name.fr?.toLowerCase().startsWith(terms.toLowerCase()) );
  }

}
