import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from 'src/models/pokemon.model';


@Injectable()
export class PokemonService {
    URL_BASE = 'https://pokeapi.co/api/v2'

    constructor(private http: HttpClient) { }

    getPokemonId(id: number) {
        return this.http.get<Pokemon>(this.URL_BASE + '/pokemon/' + id);
    }
    
    getPokemonName(name: string) {
        return this.http.get<Pokemon>(this.URL_BASE + '/pokemon/' + name);
    }
        
} 