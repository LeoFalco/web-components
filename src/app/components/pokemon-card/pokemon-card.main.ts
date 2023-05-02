import { enableProdMode } from "@angular/core";
import { PokemonCardModule } from "./pokemon-card.module";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

enableProdMode()

platformBrowserDynamic()
  .bootstrapModule(PokemonCardModule)
  .catch(err => console.error(err));