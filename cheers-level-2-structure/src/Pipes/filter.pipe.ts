import { NonNullAssert } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], filterstring:any): any{
    if(!value){
      return [];
    }
    if(!filterstring){
      return value
    }

    filterstring  = filterstring.toLowerCase()

    return value.filter((a)=>{
       return a.name.toLowerCase().includes(filterstring)
    })

  }

}