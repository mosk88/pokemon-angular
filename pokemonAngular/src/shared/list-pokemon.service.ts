import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListPokemons } from './entities';

@Injectable({
  providedIn: 'root'
})
export class ListPokemonService {
  ApiUrl ='https://tyradex.tech/api/v1/pokemon'

  constructor(private http: HttpClient) { }

  fetchAll() {
    let params = {
      limit: 20
    }
    return this.http.get<IListPokemons[]>(this.ApiUrl,{params});
  }
}
