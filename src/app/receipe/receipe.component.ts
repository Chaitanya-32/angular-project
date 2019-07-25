import { Component, OnInit } from '@angular/core';

import {Receipe } from 'receipe.model';

@Component({
  selector: 'app-receipe',
  templateUrl: './receipe.component.html',
  styleUrls: ['./receipe.component.css']
})
export class ReceipeComponent implements OnInit {
  selectedReceipe: Receipe;

  constructor() { }

  ngOnInit() {
  }

}