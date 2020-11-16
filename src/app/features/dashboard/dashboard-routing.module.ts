import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './containers/index/index.component';

const routes: Routes = [
  {path: '', redirectTo: 'pokemons', pathMatch: 'full'},
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'pokemons',
        loadChildren: () => import('./features/pokemons/pokemons.module').then(m => m.PokemonsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
