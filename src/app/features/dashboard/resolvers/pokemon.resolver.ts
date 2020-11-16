import {Injectable} from '@angular/core';
import {filter, first, tap} from 'rxjs/operators';
import {select, Store} from '@ngrx/store';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AppState} from '../../../modules/core/core.state';
import {Pokemon} from '../../../modules/api/models/pokemon';
import {selectPokemonState} from '../store/selectors/pokemon.selectors';
import {actionGetPokemons} from '../store/actions/pokemon.actions';

@Injectable()
export class PokemonResolver implements Resolve<Pokemon> {

  constructor(
    private store$: Store<AppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Pokemon> {
    return this.store$.pipe(
      select(selectPokemonState),
      tap(() => {
        this.store$.dispatch(actionGetPokemons());
      }),
      filter((result: any) => {
        return !!result;
      }),
      first()
    );
  }
}
