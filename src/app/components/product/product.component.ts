import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  product!: Product;
  productService: ProductsService = inject(ProductsService);

  constructor(private route: ActivatedRoute, private router: Router) {
    const productId = +route.snapshot.params['id'];
    this.product = this.productService.getProductById(productId);
  }

  onBackHome() {
    this.router.navigateByUrl('/');
  }
}
