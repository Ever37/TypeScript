import axios from 'axios';
import { Pokemon } from '../interfaces/pokemon';

export const getPokemon = async ( pokemonId: number ): Promise<Pokemon> => {
  // <Pokemon> no parsea la respuesta,
  // solo decimos con TS el tipo de dato que esperamos
  // y en base a eso data va a tener los atributos de la interfaz
  const { data } = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
  return data;
}