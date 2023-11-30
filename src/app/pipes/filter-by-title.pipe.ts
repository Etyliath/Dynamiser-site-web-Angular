import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'filterByTitle',
  standalone: true
})
export class FilterByTitlePipe implements PipeTransform {

  transform(product: Product[], filter: string): Product[] {
    return product.filter((product) =>
      product.title.toLowerCase().includes(filter.toLowerCase())
    );
  }

}
