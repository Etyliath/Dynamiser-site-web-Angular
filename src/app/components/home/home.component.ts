import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { SortByPricePipe } from '../../pipes/sort-by-price.pipe';
import { FilterByTitlePipe } from '../../pipes/filter-by-title.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SortByPricePipe, FilterByTitlePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

  selectedSort = '';
  search = '';
  product!:Product;
  productList: Product[] = [];
  productService: ProductsService = inject(ProductsService);

  constructor(private router:Router) {
    this.productList = this.productService.getAllProducts();
  }

  selectSortHandler(event: any) {
    this.selectedSort = event.target.value;
  }
  searchHandle(event: any) {
    event.preventDefault();
    this.search = event.target.value;
  }
  onViewProduct(productId:any) {
    this.router.navigateByUrl(`/product/${productId}`)
    }
}
