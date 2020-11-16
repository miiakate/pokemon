import {Component, OnInit} from '@angular/core';
import {Pokemon} from '../../../../modules/api/models/pokemon';
import {PokemonService} from '../../../../modules/api/services/pokemon.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private client: PokemonService) {
  }

  ngOnInit(): void {

  }

}
