import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceipeComponent } from './receipe/receipe.component';
import { ReceipeStartComponent } from './receipe/receipe-start.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/receipes', pathMatch: 'full'},
  { path: 'receipes', component: ReceipeComponent,
    children: [ 
      {path: '', component: ReceipeStartComponent} 
    ]
  },
  { path: 'shopping-list', component: ShoppingListComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRouterModule {

}