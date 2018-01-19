import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-edit',
  template: `
    <div class="edit-animal" *ngIf='childSelectedAnimal'>
      <h4>Edit Animal</h4>
      <h4>{{childSelectedAnimal.name}}</h4>
      <span>Species: {{childSelectedAnimal.species}}</span>
      <span>Age: {{childSelectedAnimal.age}}</span>
      <span>Gender: {{childSelectedAnimal.gender}}</span>
      <span>Diet: {{childSelectedAnimal.diet}}</span>
      <span>Likes: {{childSelectedAnimal.likes}}</span>
      <span>Dislikes: {{childSelectedAnimal.dislikes}}</span>
      <span>This animal is located at: {{childSelectedAnimal.location}}.</span>
      <span>This animal needs {{childSelectedAnimal.caretakersNeeded}} caretakers.</span>
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
