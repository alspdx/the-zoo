import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AnimalListComponent } from './animal-list.component';
import { AnimalEditComponent } from './animal-edit.component';
import { NewAnimalComponent } from './new-animal.component';
import { AgeRangeFilterPipe } from './age-filter.pipe';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AnimalListComponent, AnimalEditComponent, NewAnimalComponent, AgeRangeFilterPipe ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
