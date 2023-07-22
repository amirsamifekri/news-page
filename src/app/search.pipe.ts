import { Pipe, PipeTransform, Provider } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array:any[] , searchText:string):any[] {
    return array.filter((item:any)=>{return item.title.toUpperCase().includes(searchText.toUpperCase())})
  }

}
