import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <div class="new-animal" *ngIf="childAddNewAnimal">
      <div class="form-header">
        <h4>Add New Animal</h4>
        <div class="exit-button" (click)='doneAddingClick();'>X</div>
      </div>
      <label>Name: </label>
      <input #name>
      <label>Species: </label>
      <input #species>
      <label>Age: </label>
      <input type="number" #age>
      <label>Gender: </label>
      <input #gender>
      <label>Diet: </label>
      <input #diet>
      <label>Likes: </label>
      <input #likes>
      <label>Dislikes: </label>
      <input #dislikes>
      <label>This animal is located at: </label>
      <input #location>
      <label>Caretakers needed: </label>
      <input type="number" #caretakersNeeded>
      <div class="buttons-div">
        <button (click)='newAnimalClick(name.value, species.value, age.value, gender.value, diet.value, likes.value, dislikes.value, location.value, caretakersNeeded.value);
                                        name.value=""; species.value=""; age.value=""; gender.value=""; diet.value=""; likes.value=""; dislikes.value=""; location.value=""; caretakersNeeded.value="";
                                        '>Submit new animal profile!</button>
      </div>
    </div>
  `
})

export class NewAnimalComponent {
  @Input() childAddNewAnimal: boolean;
  @Output() newAnimalSender = new EventEmitter();
  @Output() doneAddingSender = new EventEmitter();

  newAnimalClick(name: string, species: string, age: string, gender: string, diet: string, likes: string, dislikes: string, location: string, caretakersNeeded: string) {
    this.newAnimalSender.emit(
      new Animal(name, species, parseInt(age, 10), gender, diet, likes, dislikes, location, parseInt(caretakersNeeded, 10))
    );
  }

  doneAddingClick() {
    this.doneAddingSender.emit();
  }
}
