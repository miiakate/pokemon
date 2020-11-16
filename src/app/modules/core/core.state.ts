import {ActionReducerMap, createFeatureSelector, MetaReducer} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import {routerReducer, RouterReducerState} from '@ngrx/router-store';
import {RouterStateUrl} from './router/router.state';

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
};
export const selectRouterState = createFeatureSelector<AppState,
  fromRouter.RouterReducerState<RouterStateUrl>>('router');

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouterState);

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
}

export const selectCoreState = state => state;
