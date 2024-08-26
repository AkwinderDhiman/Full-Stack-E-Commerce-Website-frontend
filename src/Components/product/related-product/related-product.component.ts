import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../../../Services/product.service';

@Component({
  selector: 'app-related-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './related-product.component.html',
  styleUrl: './related-product.component.scss'
})
export class RelatedProductComponent {
  data_product: any = [];
  apiError: string | null = null;

  constructor(private productService: ProductService) { }


  ngOnInit() {
    this.getProductList()
  }

  getProductList() {
    this.productService.getProductData().subscribe({
      next: res => {
        this.apiError = null;
        if (res) {
          console.log(res);
          this.data_product = res;
        }
      },
      error: err => {
        console.error(err);
        this.apiError = err?.error?.message || 'An error occurred.';
      }
    });
  }
}
