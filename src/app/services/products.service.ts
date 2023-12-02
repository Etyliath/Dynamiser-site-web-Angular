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
  getProductById(productId:number){
    const product=this.ProductList.find(product=>product.id===productId)
    if(!product){
      throw new Error('Produit introuvable')
    }
    return product
  }
  constructor() { }
}
