import {Component, OnInit} from '@angular/core';
import {selectPokemon} from '../../../../store/selectors/pokemon.selectors';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../../modules/core/core.state';
import {Location} from '@angular/common';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public pokemon$ = this.store$.select(selectPokemon);
  pokemon;

  constructor(private store$: Store<AppState>, public location: Location) {
  }

  ngOnInit(): void {
    this.pokemon$.subscribe(data => {
      this.pokemon = data;
    });
  }

  goBack(): void {
    this.location.back();
  }
}
