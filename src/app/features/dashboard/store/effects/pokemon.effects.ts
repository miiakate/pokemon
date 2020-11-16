import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map, tap} from 'rxjs/operators';
import {AppState} from '../../../../modules/core/core.state';
import {Store} from '@ngrx/store';
import {Injectable} from '@angular/core';
import {PokemonService} from '../../../../modules/api/services/pokemon.service';
import {
  actionGetPokemonByName,
  actionGetPokemonByNameFailure, actionGetPokemonByNameSuccess,
  actionGetPokemons,
  actionGetPokemonsFailure,
  actionGetPokemonsSuccess
} from '../actions/pokemon.actions';
import {of} from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class PokemonEffects {
  constructor(
    private actions$: Actions,
    private store$: Store<AppState>,
    private pokemonService: PokemonService,
    private router: Router,
  ) {
  }

  // GET POKEMONS
  getPokemons = createEffect(() =>
    this.actions$.pipe(
      ofType(actionGetPokemons),
      concatMap((params) => {
        return this.pokemonService.getPokemons().pipe(
          map(data => actionGetPokemonsSuccess({pokemons: data.results})),
          catchError(error => of(actionGetPokemonsFailure({error})))
        );
      })
    ),
  );

  getPokemonsSuccess = createEffect(() =>
      this.actions$.pipe(
        ofType(actionGetPokemonsSuccess),
        tap(params => {
        }),
      ),
    {dispatch: false}
  );

  getPokemonsFailure = createEffect(() =>
      this.actions$.pipe(
        ofType(actionGetPokemonsFailure),
      ),
    {dispatch: false}
  );

  // GET POKEMON BY NAME
  getPokemonById = createEffect(() =>
    this.actions$.pipe(
      ofType(actionGetPokemonByName),
      concatMap((params) => {
        return this.pokemonService.getPokemonByName(params.name).pipe(
          map(data => actionGetPokemonByNameSuccess({pokemon: data})),
          catchError(error => of(actionGetPokemonByNameFailure({error})))
        );
      })
    ),
  );


  getPokemonByNameSuccess = createEffect(() =>
      this.actions$.pipe(
        ofType(actionGetPokemonByNameSuccess),
        tap(params => {
          this.router.navigate(['/dashboard/pokemons/' + params.pokemon.name]);
        }),
      ),
    {dispatch: false}
  );

  getPokemonByNameFailure = createEffect(() =>
      this.actions$.pipe(
        ofType(actionGetPokemonByNameFailure),
      ),
    {dispatch: false}
  );

}
