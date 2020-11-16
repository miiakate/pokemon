import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {AppState} from '../core.state';
import {tap} from 'rxjs/operators';
import {NavigationExtras, Router} from '@angular/router';
import {actionGo} from './router.actions';

@Injectable()
export class RouterEffects {
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private router: Router,
  ) {
  }

  go = createEffect(() =>
      this.actions$.pipe(
        ofType(actionGo),
        tap((data) => {
          const extras: NavigationExtras = {...data.extras};
          this.router.navigate([data.path], extras);
        })
      ),
    {dispatch: false}
  );

}
