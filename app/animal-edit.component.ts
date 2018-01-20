import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-edit',
  template: `
    <div class="edit-animal" *ngIf='childSelectedAnimalToEdit'>
      <div class="form-header">
        <h4>Edit Animal</h4>
        <div class="exit-button" (click)='doneEditingClick();'>X</div>
      </div>
      <label>Name: </label>
      <input [(ngModel)]='childSelectedAnimalToEdit.name'>
      <label>Species: </label>
      <input [(ngModel)]='childSelectedAnimalToEdit.species'>
      <label>Age: </label>
      <input type='number' [(ngModel)]='childSelectedAnimalToEdit.age'>
      <label>Gender: </label>
      <input [(ngModel)]='childSelectedAnimalToEdit.gender'>
      <label>Diet: </label>
      <input [(ngModel)]='childSelectedAnimalToEdit.diet'>
      <label>Likes: </label>
      <input [(ngModel)]='childSelectedAnimalToEdit.likes'>
      <label>Dislikes: </label>
      <input [(ngModel)]='childSelectedAnimalToEdit.dislikes'>
      <label>This animal is located at: </label>
      <input [(ngModel)]='childSelectedAnimalToEdit.location'>
      <label>Caretakers needed: </label>
      <input type='number' [(ngModel)]='childSelectedAnimalToEdit.caretakersNeeded'>
    </div>
  `
})

export class AnimalEditComponent {
  @Input() childSelectedAnimalToEdit: Animal;
  @Output() doneEditingSender = new EventEmitter();

  doneEditingClick() {
    this.doneEditingSender.emit()
  }
}
