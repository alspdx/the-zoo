import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component ({
  selector: 'animal-list',
  template: `
    <div class="pipe-selector">
      <select (change)="changeAgeRangeToDisplay($event.target.value)">
        <option value="all">Show All Animals</option>
        <option value="underTwo">Show Animals 2 years old or under</option>
        <option value="mature">Show Animals over 2 years old</option>
      </select>
    </div>
    <div class="animal-list-output">
      <span>Click any animal to edit!</span>
      <div *ngFor='let thisAnimal of childAnimalList | ageRangeFilter:ageRangeToDisplay' (click)='editThisAnimalClick(thisAnimal)'>
        <h4>{{thisAnimal.name}}</h4>
        <span>Species: {{thisAnimal.species}}</span>
        <span>Age: {{thisAnimal.age}}</span>
        <span>Gender: {{thisAnimal.gender}}</span>
        <span>Diet: {{thisAnimal.diet}}</span>
        <span>Likes: {{thisAnimal.likes}}</span>
        <span>Disikes: {{thisAnimal.dislikes}}</span>
        <span>This animal is located at: {{thisAnimal.location}}.</span>
        <span>This animal needs {{thisAnimal.caretakersNeeded}} caretakers.</span>
      </div>
    </div>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() animalToEditSender = new EventEmitter();

  ageRangeToDisplay: string = 'all';

  editThisAnimalClick(animalToSend) {
    this.animalToEditSender.emit(animalToSend);
  }

  changeAgeRangeToDisplay(ageRange) {
    this.ageRangeToDisplay = ageRange;
  }
}
