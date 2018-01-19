import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <div class="new-animal">
      <h4>Edit Animal</h4>
      <h4>Name: <input #name'></h4>
      <span>Species: <input #species'></span>
      <span>Age: <input #age'></span>
      <span>Gender: <input #gender'></span>
      <span>Diet: <input #diet'></span>
      <span>Likes: <input #likes'></span>
      <span>Dislikes: <input #dislikes'></span>
      <span>This animal is located at: <input #location'>.</span>
      <span>This animal needs <input #caretakersNeeded'> caretakers.</span>
      <button (click)='doneEditingClick()'>I'm done editing this animal!</button>
    </div>
  `
})

export class NewAnimalComponent {

}
