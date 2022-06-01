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
  @Input() pokemon: Pokemon;

  constructor(private pokemonService: PokemonService, private router: Router, private route : ActivatedRoute) { }

  ngOnInit(): void {


    let id = this.route.snapshot.paramMap.get('id');

    let observablePokemonId = this.pokemonService.getPokemonId(id);
    observablePokemonId.subscribe(data => {
      let pokemon: Pokemon = { ...data };
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


    })
  }

}
