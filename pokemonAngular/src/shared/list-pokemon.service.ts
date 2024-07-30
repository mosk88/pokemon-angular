import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IListPokemons } from './entities';
import { environment } from '../environments/environment.development';




@Injectable({
  providedIn: 'root'
})
export class ListPokemonService {
  url = environment.apiURL

  constructor(private http: HttpClient) { }

  fetchAll() {
    let params = { 
      limit: 20
    }
    return this.http.get<IListPokemons[]>(this.url,{params});
  }

  fetchOne(id: any) {
    return this.http.get<IListPokemons>(`${this.url}/${id}`);
  }

}
