import { Pokemon } from "./pokemon.interface";

export interface PokemonApiResponse {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}
