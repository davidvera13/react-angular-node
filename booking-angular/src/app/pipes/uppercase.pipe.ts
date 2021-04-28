import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper'
})
export class UppercasePipe implements PipeTransform {

  transform(value: string, mode?: string): string {
    if (!value || typeof value !== 'string') { return ''; }
    if (mode === 'firstUpperLetter') {
      return value
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');
    }

    return value.toUpperCase();
  }
}
