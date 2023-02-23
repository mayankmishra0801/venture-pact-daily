import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure : true,
})
export class FilterPipe implements PipeTransform {

  // transform(value: any, args ?: any,  ): any {
  //   if(!value) return null;
  //   if(!args) return value;
  //   // if(!trp) return value
  //   // const [price] = value;
  //   // return value*price;

  transform(value: any,filterstring:any): any {
       var filter = value.filter((str:any)=>{
        return str.startsWith(filterstring);
        })
       return filter;


  //   args = args.toLowerCase();
    
    // return value.filter((item:any)=>{
    //   return JSON.stringify(item).toLowerCase();
    // })

  }

}
