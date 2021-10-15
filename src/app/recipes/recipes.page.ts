import { Component, OnInit } from '@angular/core';
import {RecipesModel} from "./recipes.model";
import {RecipesService} from "./recipes.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: RecipesModel[] = [];
  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
    this.setRecipes();
  }

  setRecipes() {
    this.recipes = this.recipesService.getAllRecipes();
  }

}
