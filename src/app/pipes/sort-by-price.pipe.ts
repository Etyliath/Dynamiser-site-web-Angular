import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'sortByPrice',
  standalone: true
})
export class SortByPricePipe implements PipeTransform {

  transform(product:Product[], mode:string): Product[] {
    switch (mode) {
      case 'croissant':
        return product.sort((a:any,b:any)=>{
          if( a.price < b.price){return -1}
          if( a.price > b.price){return 1}
          return 0
        });
        break;
    case 'decroissant':
      return product.sort((a:any,b:any)=>{
        if( a.price > b.price){return -1}
        if( a.price < b.price){return 1}
        return 0
      });
      default:
        return product.sort((a:any,b:any)=>{
          // if( a.price < b.price){return -1}
          // if( a.price > b.price){return 1}
          return 0
        });
        break;
    }    
  }

}
