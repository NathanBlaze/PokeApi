import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/models/pokemon.model';
import { PokemonService } from './item-list/pokemon-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'PokeApi';
  Today: number = Date.now();
 

  constructor(private router: Router, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    // let observablePokemonId = this.pokemonService.getPokemonId(25);
    // observablePokemonId.subscribe(data => { 
    //   console.log(data);
    // })
    // let observablePokemonName = this.pokemonService.getPokemonName('charizard');
    // observablePokemonName.subscribe(data => { 
    //   console.log(data);
    // })
  }

  
}
