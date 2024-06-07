import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numerarFormat',
  standalone: true
})
export class NumerarPipe implements PipeTransform {

  transform(value: number): string {
    return value > 9 ? `${value}.` : `0${value}.`;
  }

}
