import { Component, OnInit } from '@angular/core';
import {RecipesService} from '../recipes.service';
import {RecipesModel} from '../recipes.model';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {

  selectedRecipe: RecipesModel;
  constructor(private recipesService: RecipesService,
              private alertCtrl: AlertController,
              private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('recipeId')) {
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.selectedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      buttons: [
        {
          text: 'Cancel',
          role:'cancel'
        },
        {
          text: 'Yes',
          handler: () => {
            this.delete();
          }
        }
      ],
      header: 'Delete.?',
      message: 'Are you sure you want to delete.?'
    }).then((data) => {
      if (data) {
        data.present();
      }
    });
  }

  delete() {
    this.recipesService.deleteRecipe(this.selectedRecipe.id);
    this.router.navigate(['/recipes']);
  }

}
