import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  productData: any;

  constructor(private router: Router) {
    this.productData = this.router.getCurrentNavigation()?.extras.queryParams
    console.log(this.router.getCurrentNavigation()?.extras.queryParams
    );
  }

  ngOnInit() {
    console.log(this.router.getCurrentNavigation()?.extras.queryParams);

  }
  images: any = [
    "../../assets/Assets/p1_product_i1.png",
    "../../assets/Assets/p1_product_i1.png",
    "../../assets/Assets/p1_product_i1.png",
    "../../assets/Assets/p1_product_i1.png",
    "../../assets/Assets/p1_product_i1.png"
  ]
}
