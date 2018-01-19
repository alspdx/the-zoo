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
        <span>Likes: {{thisAnimal.likes}}</span>
        <span>Disikes: {{thisAnimal.dislikes}}</span>
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

  editThisAnimalClick(animalToSend) {
    this.animalToEditSender.emit(animalToSend);
  }
}
