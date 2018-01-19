import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <div class="new-animal" *ngIf='childAddNewAnimal'>
      <h4>Edit Animal</h4>
      <h4>Name: <input #name></h4>
      <span>Species: <input #species></span>
      <span>Age: <input #age></span>
      <span>Gender: <input #gender></span>
      <span>Diet: <input #diet></span>
      <span>Likes: <input #likes></span>
      <span>Dislikes: <input #dislikes></span>
      <span>This animal is located at: <input #location>.</span>
      <span>This animal needs <input #caretakersNeeded> caretakers.</span>
      <button (click)='newAnimalClick(name.value, species.value, age.value, gender.value, diet.value, likes.value, dislikes.value, location.value, caretakersNeeded.value)'>Submit new animal profile!</button>
      <button (click)='doneAddingClick()'>I'm done adding new animals!</button>
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
