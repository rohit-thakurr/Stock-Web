import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tobillions'
})
export class TobillionsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
