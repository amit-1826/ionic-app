import { Component, OnInit } from '@angular/core';
import {RecipesService} from "../recipes.service";
import {RecipesModel} from "../recipes.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  selectedRecipe: RecipesModel;
  constructor(private recipesService: RecipesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.selectedRecipe = this.recipesService.getRecipe(recipeId);
    })
  }

}
