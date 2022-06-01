import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/models/pokemon.model';
import { PokemonService } from './pokemon-service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  public listaPokemon: Pokemon[] = [];
  public listaPokemonFiltrada: Pokemon[] = [];
  public textoBusqueda: string = '';

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    for (let i = 1; i <= 50; i++) {
      let observablePokemonId = this.pokemonService.getPokemonId(i);
      observablePokemonId.subscribe(data => {
        let pokemon: Pokemon = {...data};
        pokemon.types = [];
        data.types.forEach((element: any) => {
          // console.log(element.type.name)
          pokemon.types.push(element.type)
        });
        this.listaPokemon.push(pokemon);
        this.listaPokemonFiltrada = this.listaPokemon
      });
    }
  }

  buscarPokemon() {
    let observablePokemonName = this.pokemonService.getPokemonName(this.textoBusqueda)
    observablePokemonName.subscribe(data => {
      let pokemon: Pokemon = {...data};
        pokemon.types = [];
      data.types.forEach((element: any) => {
        console.log(element.type.name)
        pokemon.types.push(element.type)
      });
      this.listaPokemonFiltrada = [pokemon];
    })
  }

  checkInputVacio(){
    if (this.textoBusqueda === ""){
      this.listaPokemonFiltrada = this.listaPokemon;
    }
  }
}
