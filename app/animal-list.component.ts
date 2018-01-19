import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model'

@Component ({
  selector: 'animal-list',
  template: `
    <div class="animal-list-output">
      <div *ngFor='let thisAnimal of childAnimalList'>
        <h4>{{thisAnimal.name}}</h4>
        <span>Species: {{thisAnimal.species}}</span>
        <span>Age: {{thisAnimal.age}}</span>
        <span>Gender: {{thisAnimal.gender}}</span>
        <span>Diet: {{thisAnimal.diet}}</span>
        <span>Likes:</span>
        <ul>
          <span *ngFor='let thisLike of thisAnimal.likes'>{{thisLike}}</span>
        </ul>
        <span>Dislikes:</span>
        <ul>
          <span *ngFor='let thisDislike of thisAnimal.dislikes'>{{thisDislike}}</span>
        </ul>
        <span>This animal is located at: {{thisAnimal.location}}.</span>
        <span>This animal needs {{thisAnimal.caretakersNeeded}} caretakers.</span>
        <button (click)='editThisAnimalClick(thisAnimal)'>Edit This Animal!</button>
      </div>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() animalToEditSender = new EventEmitter();

  editThisAnimal(animalToEdit) {
    this.animalToEditSender.emit(animalToEdit);
  }
}
