import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {IndexComponent} from './containers/index/index.component';
import {ListComponent} from './containers/list/list.component';
import {DetailsComponent} from './containers/details/details.component';
import {PokemonResolver} from '../../resolvers/pokemon.resolver';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: '',
        component: ListComponent,
        resolve: {
          pokemons: PokemonResolver
        }
      },
      {
        path: ':pokemonName',
        component: DetailsComponent,
        resolve: {
          pokemon: PokemonResolver
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule {
}
