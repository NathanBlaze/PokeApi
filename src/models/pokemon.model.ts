import { PokemonStat } from "./pokemon-stat.model";
import { PokemonType } from "./pokemon-type.model";

export class Pokemon {
    public id: number = 0;
    public name: string = '';
    public types: PokemonType[] = [];
    public stats: PokemonStat[] = [];
}