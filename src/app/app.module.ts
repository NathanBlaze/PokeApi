import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from '@angular/forms';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonService } from './item-list/pokemon-service';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
