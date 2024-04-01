import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon.interface';
import { PokemonApiResponse } from '../interfaces/pokemon-api-response.interface';
import {catchError, map, startWith, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiPlayService {

  constructor(private http: HttpClient) { }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<PokemonApiResponse>('https://pokeapi.co/api/v2/pokemon').pipe(
      map((response: PokemonApiResponse) => {
        return response.results;
      }),
      catchError((error) => {
        console.error('Error fetching Pokemon list:', error);
        return of([]); // Return an empty array in case of error
      }),
      startWith([]) // Provide an initial empty array while the request is in progress
    );
  }
}
