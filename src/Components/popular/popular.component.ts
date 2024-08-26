import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.scss'
})
export class PopularComponent {
  
  data_product = [
    {
      id:1,
      name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      image:"../../assets/Assets/product_1.png",
      new_price:50.00,
      old_price:80.50,
    },
    {id:2,
      name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      image:"../../assets/Assets/product_2.png",
      new_price:85.00,
      old_price:120.50,
    },
    {id:3,
      name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      image:"../../assets/Assets/product_3.png",
      new_price:60.00,
      old_price:100.50,
    },
    {id:4,
      name:"Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      image:"../../assets/Assets/product_4.png",
      new_price:100.00,
      old_price:150.00,
    },
  ];
}
