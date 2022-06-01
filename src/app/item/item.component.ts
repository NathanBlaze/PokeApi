import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/models/pokemon.model';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() pokemon: Pokemon; 

  constructor() { }

  ngOnInit(): void {
  }

}
