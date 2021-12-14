import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProject'
})
export class SearchProjectPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
