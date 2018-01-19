import { Pipe, PipeTransform } from '@angular/core';
import { Animal } from './animal.model';

@Pipe({
  name: 'age-filter',
  pure: false
})

export class AgeFilterPipe implements PipeTransform {
  transform(input: Animal[], filterAgeRange) {
    let output: Animal[] = [];
  }
}
