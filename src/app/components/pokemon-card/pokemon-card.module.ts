import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { ApplicationRef, DoBootstrap, Injector, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { PokemonCardComponent } from "./pokemon-card.component";
import { PokemonStatComponent } from "./pokemon-stat/pokemon-stat.component";
import { PokemonService } from "./pokemon.service";
import { createCustomElement } from "@angular/elements";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  exports: [
    PokemonCardComponent
  ],
  declarations: [
    PokemonCardComponent,
    PokemonStatComponent
  ],
  providers: [
    PokemonService
  ]
})
export class PokemonCardModule implements DoBootstrap {


  constructor(private readonly injector: Injector) {
  }

  ngDoBootstrap(_appRef: ApplicationRef): void {
    customElements.define('app-pokemon-card', createCustomElement(PokemonCardComponent, { injector: this.injector }));
  }

}