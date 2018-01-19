import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
    <h1>The Zoo</h1>
    <div class='animal-container'>
      <animal-list [childAnimalList]='masterAnimalList' (animalToEditSender)='editThisAnimal($event)'></animal-list>
    </div>
    <div class='edit-container'>
      <animal-edit [childSelectedAnimal]='selectedAnimal'></animal-edit>
    </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Fluffy', 'Grizzly Bear', 12, 'Male', 'Carnivore', 'Scratching back on tree trunks', 'Being poked', 'East Bear Sanctuary', 5),
    new Animal('Candy', 'Polar Bear', 7, 'Female', 'Carnivore', 'Playing in the snow', 'Global Warming', 'Ice Caves', 6),
    new Animal('Prince Edward', 'Lion', 22, 'Male', 'Carnivore', 'The thrill of the hunt', 'Not being respected at the watering hole', 'The Safari Room', 9),
    new Animal('Dudley', 'Elephant', 48, 'Male', 'Herbivore', 'Stamping around in the mud', 'Circus freaks and mice', 'The Safari Room', 3),
    new Animal('Christina', 'Flamingo', 18, 'Female', 'Omnivore', 'Wading around, eating shrimp, the color pink', 'Open relationships and Standing on two legs', 'Shallow Shores', 1),
  ]

  selectedAnimal = null;

  editThisAnimal(animalToEdit) {
    this.selectedAnimal = animalToEdit;
  }

}
