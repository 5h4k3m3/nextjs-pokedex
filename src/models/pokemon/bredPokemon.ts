import { Pokemon } from './pokemon';

export type BredPokemon = {
  uuid: string;
  item: string;
  moves: string[];
} & Pokemon;
