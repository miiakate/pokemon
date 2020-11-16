import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from '@ngrx/store';
import {reducers} from './core.state';
import {EffectsModule} from '@ngrx/effects';
import {RouterEffects} from './router/router.effects';
import {environment} from '../../../environments/environment';
import {ApiModule} from '../api/api.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ApiModule.forRoot({
      rootUrl: environment.apis.http
    }),
    // ngrx
    StoreRouterConnectingModule.forRoot(),
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([
      RouterEffects,
    ]),
  ],
  exports: [
    // Angular
    FormsModule,
  ],
  providers: [],
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
      parentModule: CoreModule,
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }

  }
}
