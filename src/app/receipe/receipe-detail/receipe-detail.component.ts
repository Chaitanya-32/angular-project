import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  receipe: Receipe;
  id: number;

  constructor(private receipeService: ReceipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.receipe = this.receipeService.getReceipeById(this.id);
      }
    );
  }

  onAddToShoppingList() {
    this.receipeService.onIngredientsAddedToList(this.receipe.ingredients);
  }

}