import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PokemonCardComponent implements OnInit {

  @Input() public pokemonName!: string

  public pokemon$!: Observable<any>

  constructor(private readonly pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemon$ = this.pokemonService.getPokemon(this.pokemonName)
  }

}
