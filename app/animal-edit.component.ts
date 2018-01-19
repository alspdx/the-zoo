import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-edit',
  template: `
    <div class="edit-animal" *ngIf='childSelectedAnimal'>
      <div class="form-header">
        <h4>Edit Animal</h4>
        <div class="exit-button" (click)='doneEditingClick();'>X</div>
      </div>
      <label>Name: </label>
      <input [(ngModel)]='childSelectedAnimal.name'>
      <label>Species: </label>
      <input [(ngModel)]='childSelectedAnimal.species'>
      <label>Age: </label>
      <input type='number' [(ngModel)]='childSelectedAnimal.age'>
      <label>Gender: </label>
      <input [(ngModel)]='childSelectedAnimal.gender'>
      <label>Diet: </label>
      <input [(ngModel)]='childSelectedAnimal.diet'>
      <label>Likes: </label>
      <input [(ngModel)]='childSelectedAnimal.likes'>
      <label>Dislikes: </label>
      <input [(ngModel)]='childSelectedAnimal.dislikes'>
      <label>This animal is located at: </label>
      <input [(ngModel)]='childSelectedAnimal.location'>
      <label>Caretakers needed: </label>
      <input type='number' [(ngModel)]='childSelectedAnimal.caretakersNeeded'>
    </div>
  `
})

export class AnimalEditComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneEditingSender = new EventEmitter();

  doneEditingClick() {
    this.doneEditingSender.emit()
  }
}
