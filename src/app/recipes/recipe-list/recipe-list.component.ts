import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe [] = [
    new Recipe('A Test Recipe', 'A Test Recipe description', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1074500_11.jpg' ),
    new Recipe('B Test Recipe', 'B Test Recipe description', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1074500_11.jpg' ),
    new Recipe('C Test Recipe', 'C Test Recipe description', 'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--1074500_11.jpg' )
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
