import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  loadedFeature = 'receipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
