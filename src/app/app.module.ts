import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRouterModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { ReceipeComponent } from './receipe/receipe.component';
import { ReceipeListComponent } from './receipe/receipe-list/receipe-list.component';
import { ReceipeDetailComponent } from './receipe/receipe-detail/receipe-detail.component';
import { ReceipeItemComponent } from './receipe/receipe-list/receipe-item/receipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { ReceipeService } from './receipe/receipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { ReceipeStartComponent } from './receipe/receipe-start/receipe-start.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    AppRouterModule
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HeaderComponent, 
    ReceipeComponent, 
    ReceipeListComponent, 
    ReceipeDetailComponent, 
    ReceipeItemComponent, 
    ShoppingListComponent, 
    ShoppingEditComponent, 
    DropdownDirective, ReceipeStartComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [ReceipeService, ShoppingListService]
})
export class AppModule { }
