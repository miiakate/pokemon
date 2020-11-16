import {SharedModule} from '../../../../modules/shared/shared.module';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonsRoutingModule} from './pokemons-routing.module';
import {IndexComponent} from './containers/index/index.component';
import {ListComponent} from './containers/list/list.component';
import {DetailsComponent} from './containers/details/details.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    IndexComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    PokemonsRoutingModule,
    SharedModule,
    MatGridListModule,
    MatPaginatorModule,
  ]
})
export class PokemonsModule {
}
