import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Receipe } from '../receipe.model';
import { ReceipeService } from '../receipe.service';

@Component({
  selector: 'app-receipe-detail',
  templateUrl: './receipe-detail.component.html',
  styleUrls: ['./receipe-detail.component.css']
})
export class ReceipeDetailComponent implements OnInit {
  receipe: Receipe;

  constructor(private receipeService: ReceipeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    this.receipeService.onIngredientsAddedToList(this.receipe.ingredients);
  }

}