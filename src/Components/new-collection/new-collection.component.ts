import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-new-collection',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-collection.component.html',
  styleUrl: './new-collection.component.scss'
})
export class NewCollectionComponent {
  new_collections = [
    {
      id: 12,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      image: "../../assets/Assets/product_12.png",
      new_price: 50.0,
      old_price: 80.5,
    },
    {
      id: 35,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      image: '../../assets/Assets/product_35.png',
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 14,
      name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      image: '../../assets/Assets/product_14.png',
      new_price: 60.0,
      old_price: 100.5,
    },
    {
      id: 8,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      image: '../../assets/Assets/product_8.png',
      new_price: 100.0,
      old_price: 150.0,
    },
    {
      id: 15,
      name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      image: '../../assets/Assets/product_15.png',
      new_price: 50.0,
      old_price: 80.5,
    },
    {
      id: 2,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      image: '../../assets/Assets/product_2.png',
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 17,
      name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      image: '../../assets/Assets/product_17.png',
      new_price: 60.0,
      old_price: 100.5,
    },
    {
      id: 28,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      image: '../../assets/Assets/product_28.png',
      new_price: 100.0,
      old_price: 150.0,
    },
  ];
}
