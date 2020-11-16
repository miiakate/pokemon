import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardRoutingModule} from './dashboard-routing.module';
import {SharedModule} from '../../modules/shared/shared.module';
import {IndexComponent} from './containers/index/index.component';
import {PokemonResolver} from './resolvers/pokemon.resolver';
import {PokemonEffects} from './store/effects/pokemon.effects';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/states/app.state';


@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    StoreModule.forFeature('dashboard', reducers),
    EffectsModule.forFeature([
      PokemonEffects,
    ]),
    SharedModule,
  ],
  providers: [
    PokemonResolver
  ]
})
export class DashboardModule {
}
