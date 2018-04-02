import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe [] = [
    new Recipe('A Test Recipe', 'A Test Recipe description', 'file:///E:/Code/Java/AngularCLI/CourseProject/src/assets/img/a.jpg' )
    // new Recipe('B Test Recipe', 'B Test Recipe description', 'file:///E:/Code/Java/AngularCLI/CourseProject/src/assets/img/b.jpg' ),
    // new Recipe('C Test Recipe', 'C Test Recipe description', 'file:///E:/Code/Java/AngularCLI/CourseProject/src/assets/img/c.jpg' ),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
