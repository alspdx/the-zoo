import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>The Zoo</h1>
    <div class='wrapper'>
      <div class='animal-container'>
        <button class='add-new-animal-button' (click)='openAddNewAnimalForm()'>Add a new animal!</button>
        <animal-list [childAnimalList]='masterAnimalList' (animalToEditSender)='openEditThisAnimal($event)'></animal-list>
      </div>
      <div class='edit-container'>
        <animal-edit *ngIf='selectedAnimalToEdit' [childSelectedAnimalToEdit]='selectedAnimalToEdit' (doneEditingSender)='closeEditThisAnimal()'></animal-edit>
        <new-animal *ngIf='addNewAnimal' [childAddNewAnimal]='addNewAnimal' (newAnimalSender)='addNewAnimalProfile($event)' (doneAddingSender)=closeAddNewAnimalForm()></new-animal>
      </div>
    </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Christina', 'Flamingo', 2, 'Female', 'Omnivore', 'Wading around all day, eating shrimp, "Pretty In Pink" starring Molly Ringwald', 'Open relationships, standing on two legs', 'Shallow Shores', 1),
    new Animal('Mittens', 'Lion', 1, 'Female', 'Carnivore', 'Playing', 'Being picked up', 'The Safari Room', 2),
    new Animal('Fluffy', 'Grizzly Bear', 12, 'Male', 'Carnivore', 'Scratching back on tree trunks', 'Being poked', 'East Bear Sanctuary', 5),
    new Animal('Candy', 'Polar Bear', 7, 'Female', 'Carnivore', 'Playing in the snow', 'Global Warming', 'Ice Caves', 6),
    new Animal('Prince Edward', 'Lion', 22, 'Male', 'Carnivore', 'The thrill of the kill', 'Authority not being respected at the watering hole', 'The Safari Room', 9),
    new Animal('Dudley', 'Elephant', 48, 'Male', 'Herbivore', 'Stamping around in the mud', 'Circus freaks and mice', 'The Safari Room', 3)
  ];

  selectedAnimalToEdit = null;
  addNewAnimal = false;

  openEditThisAnimal(animalToEdit) {
    this.selectedAnimalToEdit = animalToEdit;
    this.addNewAnimal = false;
  }

  closeEditThisAnimal() {
    this.selectedAnimalToEdit = null;
  }

  openAddNewAnimalForm() {
    this.addNewAnimal = true;
    this.selectedAnimalToEdit = null;
  }

  closeAddNewAnimalForm() {
    this.addNewAnimal = false;
  }

  addNewAnimalProfile(animalToAdd) {
    this.masterAnimalList.push(animalToAdd);
  }
}
