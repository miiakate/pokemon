import {createAction, props} from '@ngrx/store';


// GET POKEMONS
export const actionGetPokemons = createAction(
  '[Pokemon] Get pokemons',
);

export const actionGetPokemonsSuccess = createAction(
  '[Pokemon] Get pokemons success',
  props<{ pokemons: any }>()
);
export const actionGetPokemonsFailure = createAction(
  '[Pokemon] Get pokemons failure',
  props<{ error: any }>()
);


// GET POKEMON BY ID
export const actionGetPokemonByName = createAction(
  '[Pokemon] Get pokemon by name',
  props<{ name: string }>()
);

export const actionGetPokemonByNameSuccess = createAction(
  '[Pokemon] Get pokemon by name success',
  props<{ pokemon: any }>()
);
export const actionGetPokemonByNameFailure = createAction(
  '[Pokemon] Get pokemon by name failure',
  props<{ error: any }>()
);
