import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mycurrency',
  standalone: true
})
export class MycurrencyPipe implements PipeTransform {

  transform(value: number, ...args: number[]): unknown {
    const[x]=args
    return value*x;
  }

}
