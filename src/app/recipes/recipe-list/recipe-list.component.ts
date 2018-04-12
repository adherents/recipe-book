import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'Test description', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2009/5/27/0/0125629_03_chicken-in-skillet_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371589386937.jpeg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
