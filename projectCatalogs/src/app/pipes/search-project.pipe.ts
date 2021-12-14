import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../models/project.model';

@Pipe({
  name: 'searchProject'
})
export class SearchProjectPipe implements PipeTransform {

  transform(value: Project[], word: string): Project[] {
    
      return word !== undefined ?
             value.filter(p=>p.name?.toLowerCase().includes(word.toLowerCase()))
             :
             value;
  }

}
