import { Component } from '@angular/core';
import { Animal } from './animal.model'

@Component({
  selector: 'app-root',
  template: `
    <h1>The Zoo</h1>
    <div>

    </div>
  `
})

export class AppComponent {
  masterAnimalList: Animal[] = [
    new Animal('Fluffy', 'Grizzly Bear', 12, 'Male', 'Carnivore', ['Scratching back on tree trunks', 'Roaring'], ['Hibertnation being interrupted', 'Being poked'], 'East Bear Sanctuary', 5),
    new Animal('Candy', 'Polar Bear', 7, 'Female', 'Carnivore', ['Playing in the snow', 'Fishing through ice'], ['Global Warming', 'The Desert'], 'Ice Caves', 6),
    new Animal('Prince Edward', 'Lion', 22, 'Male', 'Carnivore', ['The thrill of the hunt', 'Roaring'], ['Vegetables', 'Not being respected at the watering hole'], 'The Safari Room', 9),
    new Animal('Dudley', 'Elephant', 48, 'Male', 'Herbivore', ['Mud pits', 'Stamping around'], ['The Circus', 'Mice'], 'The Safari Room', 3),
    new Animal('Christina', 'Flamingo', 18, 'Female', 'Omnivore', ['Wading', 'Putting her foot down', 'Eating shrimp'], ['Open relationships', 'Standing on two legs'], 'Shallow Shores', 1),
  ]
}
