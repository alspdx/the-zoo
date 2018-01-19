import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-edit',
  template: `
    <div class="edit-animal" *ngIf='childSelectedAnimal'>
      <h4>Edit Animal</h4>
      <h4>Name: <input [(ngModel)]='childSelectedAnimal.name'></h4>
      <span>Species: <input [(ngModel)]='childSelectedAnimal.species'></span>
      <span>Age: <input type='number' [(ngModel)]='childSelectedAnimal.age'></span>
      <span>Gender: <input [(ngModel)]='childSelectedAnimal.gender'></span>
      <span>Diet: <input [(ngModel)]='childSelectedAnimal.diet'></span>
      <span>Likes: <input [(ngModel)]='childSelectedAnimal.likes'></span>
      <span>Dislikes: <input [(ngModel)]='childSelectedAnimal.dislikes'></span>
      <span>This animal is located at: <input [(ngModel)]='childSelectedAnimal.location'></span>
      <span>Caretakers needed: <input type='number' [(ngModel)]='childSelectedAnimal.caretakersNeeded'></span>
      <button (click)='doneEditingClick()'>I'm done editing this animal!</button>
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
