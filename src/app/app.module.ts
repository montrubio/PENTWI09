import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FoodListComponent } from './foods/food-list/food-list.component';
import { MatrixGreenTextDirective } from './directives/matrix-green-text.directive';
import { MyComponentComponent } from './my-component/my-component.component';


@NgModule({
  declarations: [
    AppComponent,
    FoodListComponent,
    MatrixGreenTextDirective,
    MyComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
