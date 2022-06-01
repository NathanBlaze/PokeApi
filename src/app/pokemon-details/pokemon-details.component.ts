import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/models/pokemon.model';
import { PokemonService } from '../item-list/pokemon-service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  public pokemonElegido: Pokemon;

  constructor(private pokemonService: PokemonService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(data => {
      const id = <number>data['id'];
      if (id !== null) {
        let observablePokemonId = this.pokemonService.getPokemonId(id);
        observablePokemonId.subscribe(data => {
          this.pokemonElegido = { ...data };
          this.pokemonElegido.types = [];
          data.types.forEach((element: any) => {
            // console.log(element.type.name)
            this.pokemonElegido.types.push(element.type)
          });
          data.stats = [];
          data.stats.forEach((element: any) => {
            // console.log(element.type.name)
            this.pokemonElegido.stats.push(element)
          });
        })
      }
    });
  }
}
