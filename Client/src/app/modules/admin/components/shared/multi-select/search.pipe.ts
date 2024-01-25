import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchList',
  standalone: true
})
export class SearchPipe implements PipeTransform {

  transform(value: any[] | null, search: string): any[] {
    return value?.filter(x => x.name.toLowerCase().includes(search.toLowerCase())) ?? [];
  }

}
