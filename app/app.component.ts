import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>The Zoo</h1>
    <div class='wrapper'>
      <div class='animal-container'>
        <button class='add-new-animal-button' (click)='openAddNewAnimalForm()'>Add a new animal!</button>
        <animal-list [childAnimalList]='masterAnimalList' (animalToEditSender)='editThisAnimal($event)'></animal-list>
      </div>
      <div class='edit-container'>
        <animal-edit *ngIf='selectedAnimal' [childSelectedAnimal]='selectedAnimal' (doneEditingSender)='doneEditingAnimal()'></animal-edit>
        <new-animal *ngIf='addNewAnimal' [childAddNewAnimal]='addNewAnimal' (newAnimalSender)='newAnimalProfile($event)' (doneAddingSender)=doneAddingNewAnimal()></new-animal>
      </div>
    </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Christina', 'Flamingo', 2, 'Female', 'Omnivore', 'Wading around all day, eating shrimp, "Pretty In Pink" starring Molly Ringwald', 'Open relationships and Standing on two legs', 'Shallow Shores', 1),
    new Animal('Mittens', 'Lion', 1, 'Female', 'Carnivore', 'Playing', 'Being picked up', 'The Safari Room', 2),
    new Animal('Fluffy', 'Grizzly Bear', 12, 'Male', 'Carnivore', 'Scratching back on tree trunks', 'Being poked', 'East Bear Sanctuary', 5),
    new Animal('Candy', 'Polar Bear', 7, 'Female', 'Carnivore', 'Playing in the snow', 'Global Warming', 'Ice Caves', 6),
    new Animal('Prince Edward', 'Lion', 22, 'Male', 'Carnivore', 'The thrill of the hunt', 'Authority not being respected at the watering hole', 'The Safari Room', 9),
    new Animal('Dudley', 'Elephant', 48, 'Male', 'Herbivore', 'Stamping around in the mud', 'Circus freaks and mice', 'The Safari Room', 3)
  ];

  selectedAnimal = null;
  addNewAnimal = false;

  editThisAnimal(animalToEdit) {
    this.selectedAnimal = animalToEdit;
    this.addNewAnimal = false;
  }

  doneEditingAnimal() {
    this.selectedAnimal = null;
  }

  doneAddingNewAnimal() {
    this.addNewAnimal = false;
  }

  openAddNewAnimalForm() {
    this.addNewAnimal = true;
    this.selectedAnimal = null;
  }

  newAnimalProfile(animalToAdd) {
    this.masterAnimalList.push(animalToAdd);
  }
}
