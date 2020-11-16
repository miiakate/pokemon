import * as fromPokemon from '../../store/states/pokemon.state';
import {createSelector} from '@ngrx/store';
import {DashboardState, selectDashboardState} from '../states/app.state';


export const selectPokemonState = createSelector(
  selectDashboardState,
  (state: DashboardState) => state.pokemon
);

export const selectPokemons = createSelector(
  selectPokemonState,
  (state: fromPokemon.PokemonState) => state.pokemons
);
export const selectPokemon = createSelector(
  selectPokemonState,
  (state: fromPokemon.PokemonState) => state.pokemon
);

