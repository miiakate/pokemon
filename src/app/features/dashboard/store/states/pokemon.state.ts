import {Pokemon} from '../../../../modules/api/models/pokemon';
import {Action, createReducer, on} from '@ngrx/store';
import {actionGetPokemonByName, actionGetPokemonByNameSuccess, actionGetPokemonsSuccess} from '../actions/pokemon.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export interface PokemonState extends EntityState<Pokemon> {
  pokemons: Pokemon[];
  pokemon: Pokemon;

}

export const pokemonAdapter: EntityAdapter<Pokemon> = createEntityAdapter<Pokemon>({});

export const initialState: PokemonState = pokemonAdapter.getInitialState({
  pokemons: [],
  pokemon: null,
});

const reducer = createReducer(
  initialState,
  on(actionGetPokemonsSuccess, (state, {pokemons}) =>
    ({...state, pokemons})
  ),  on(actionGetPokemonByNameSuccess, (state, {pokemon}) =>
    ({...state, pokemon})
  ),
);

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = pokemonAdapter.getSelectors();

export function pokemonReducer(state: PokemonState | undefined, action: Action) {
  return reducer(state, action);
}
