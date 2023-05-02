import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable()
export class PokemonService {
  private readonly API_URL = 'https://pokeapi.co/api/v2';

  constructor(private httpClient: HttpClient) {}

  public getPokemon(name: string) {
    return this.httpClient.get(`${this.API_URL}/pokemon/${name}`);
  }
}
