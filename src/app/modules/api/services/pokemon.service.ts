import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';

@Injectable()
export class PokemonService {

  constructor(private http: HttpClient) {
  }

  private baseURL = environment.apis.http;

  getPokemons() {
    return this.http.get<any>(`${this.baseURL}pokemon`);

  }

  getPokemonByName(name: string) {
    return this.http.get(`${this.baseURL}pokemon/${name}`);
  }
}
