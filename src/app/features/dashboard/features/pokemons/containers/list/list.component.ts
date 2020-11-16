import {Component, OnInit, ViewChild} from '@angular/core';
import {PokemonService} from '../../../../../../modules/api/services/pokemon.service';
import {selectPokemons} from '../../../../store/selectors/pokemon.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../../modules/core/core.state';
import {actionGetPokemonByName} from '../../../../store/actions/pokemon.actions';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public pokemons$ = this.store$.select(selectPokemons);
  displayedColumns: string[] = ['position', 'name', 'details',];
  data: any[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>(this.data);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private client: PokemonService, private store$: Store<AppState>) {
  }

  ngOnInit(): void {
    this.pokemons$.subscribe(data => {
      this.data = data;
      this.dataSource = new MatTableDataSource<any>(this.data);
      this.dataSource.paginator = this.paginator;
    });
  }


  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  openDetails(name: string): void {
    this.store$.dispatch(actionGetPokemonByName({name}));
  }
}
