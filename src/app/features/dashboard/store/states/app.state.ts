import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {AppState} from '../../../../modules/core/core.state';
import {pokemonReducer, PokemonState} from './pokemon.state';

export const selectDashboardState = createFeatureSelector<State, DashboardState>('dashboard');

export const reducers: ActionReducerMap<DashboardState> = {
  pokemon: pokemonReducer,

};

export interface DashboardState {
  pokemon: PokemonState;

}

export interface State extends AppState {
  dashboard: DashboardState;
}
