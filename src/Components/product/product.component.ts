import { Component } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RelatedProductComponent } from './related-product/related-product.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ProductDetailComponent,
    RelatedProductComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
