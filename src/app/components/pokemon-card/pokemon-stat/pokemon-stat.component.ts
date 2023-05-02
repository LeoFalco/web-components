import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-stat',
  templateUrl: './pokemon-stat.component.html',
  styleUrls: ['./pokemon-stat.component.scss']
})
export class PokemonStatComponent {

  @Input() public stat!: any

}
