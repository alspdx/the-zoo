import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'ageRangeFilter',
  pure: false
})

export class AgeRangeFilterPipe implements PipeTransform {
  transform(input: Animal[], filterAgeRange) {
    let output: Animal[] = [];
    if (filterAgeRange === 'underTwo') {
      input.map(function(animal) {
        if (animal.age <= 2) {
          output.push(animal);
        }
      })
      return output;
    } else if (filterAgeRange === 'mature') {
      input.map(function(animal) {
        if (animal.age > 2) {
          output.push(animal);
        }
      })
      return output;
    } else {
      return input;
    }
  }
}
