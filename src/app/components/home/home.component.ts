import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { SortByPricePipe } from '../../pipes/sort-by-price.pipe';
import { FilterByTitlePipe } from '../../pipes/filter-by-title.pipe';

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

  productList: Product[] = [];
  productService: ProductsService = inject(ProductsService);

  constructor() {
    this.productList = this.productService.getAllProducts();
  }

  selectSortHandler(event: any) {
    this.selectedSort = event.target.value;
  }
  searchHandle(event: any) {
    event.preventDefault();
    this.search = event.target.value;
  }
}
