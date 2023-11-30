import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import datas from '../../assets/data/datas.json';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  protected ProductList: Product[] = datas.products;

  getAllProducts(): Product[] {
    return this.ProductList;
  }
  constructor() { }
}
