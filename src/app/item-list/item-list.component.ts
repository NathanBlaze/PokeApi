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
      //observable que se encarga de devolver pokemon por id, y que se repite 50 veces por el bucle for
      let observablePokemonId = this.pokemonService.getPokemonId(i);
      observablePokemonId.subscribe(data => {
        let pokemon: Pokemon = {...data};
        pokemon.types = [];
        data.types.forEach((element: any) => {
          // console.log(element.type.name)
          pokemon.types.push(element.type)
        });
        pokemon.stats = [];
        data.stats.forEach((element: any) => {
          // console.log(element.type.name)
          pokemon.stats.push(element.stat)
        });

        this.listaPokemon.push(pokemon);
        this.listaPokemonFiltrada = this.listaPokemon
      });
    }
  }

  //observable que se encarga de devolver especificamente el pokemon escrito en el buscador (al pulsar el boton Buscar)
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

  // //comprobador de que el buscador este vacío para que en dicho caso devuelva la lista original que tiene todos los pokemon 
  // (con un keyup para que se active en cuanto borramos el contenido del buscador)
  checkInputVacio(){
    if (this.textoBusqueda === ""){
      this.listaPokemonFiltrada = this.listaPokemon;
    }
  }
}
