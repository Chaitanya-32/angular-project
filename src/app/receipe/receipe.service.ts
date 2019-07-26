import { Injectable } from '@angular/core';

import { Receipe } from 'receipe.model';

@Injectable({providedIn: 'root'})
export class ReceipeService {
  private receipes: Receipe[] = [
    new Receipe('First Receipe', 'Good Receipe', 'https://media.istockphoto.com/photos/delhi-biryani5-picture-id519486575?k=6&m=519486575&s=612x612&w=0&h=pRFXIUG71hOe0yQ1BDIKreVtFum5G4t-CEnix3Q22SU='),
    new Receipe('Second Receipe', 'Good Receipe', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kRg2Hzdjjb820GeWHvIOFLn7-ItdJnOG5NhwE2b-KHpWdPre8Q')
  ];

  constructor() { }

  getReceipes() {
    return this.receipes.slice();
  }

}