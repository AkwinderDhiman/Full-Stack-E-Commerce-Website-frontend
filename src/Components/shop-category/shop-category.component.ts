import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-shop-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shop-category.component.html',
  styleUrl: './shop-category.component.scss'
})
export class ShopCategoryComponent {
  currentUrl: any;
  imageSrc: any;
  filteredProducts: any = [];
  all_product = [
    {
      id: 1,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      category: "women",
      image: "../../assets/Assets/product_1.png",
      new_price: 50.0,
      old_price: 80.5,
    },
    {
      id: 2,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      category: "women",
      image: "../../assets/Assets/product_2.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 3,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      category: "women",
      image: "../../assets/Assets/product_3.png",
      new_price: 60.0,
      old_price: 100.5,
    },
    {
      id: 4,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      category: "women",
      image: "../../assets/Assets/product_4.png",
      new_price: 100.0,
      old_price: 150.0,
    },
    {
      id: 5,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      category: "women",
      image: "../../assets/Assets/product_5.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 6,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      category: "women",
      image: "../../assets/Assets/product_6.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 7,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      category: "women",
      image: "../../assets/Assets/product_7.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 8,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      category: "women",
      image: "../../assets/Assets/product_8.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 9,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      category: "women",
      image: "../../assets/Assets/product_9.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 10,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      category: "women",
      image: "../../assets/Assets/product_10.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 11,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      category: "women",
      image: "../../assets/Assets/product_11.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 12,
      name: "Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse",
      category: "women",
      image: "../../assets/Assets/product_12.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 13,
      name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      category: "men",
      image: "../../assets/Assets/product_13.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 14,
      name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      category: "men",
      image: "../../assets/Assets/product_14.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 15,
      name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      category: "men",
      image: "../../assets/Assets/product_15.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 16,
      name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      category: "men",
      image: "../../assets/Assets/product_16.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 17,
      name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      category: "men",
      image: "../../assets/Assets/product_17.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 18,
      name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      category: "men",
      image: "../../assets/Assets/product_18.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 19,
      name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      category: "men",
      image: "../../assets/Assets/product_19.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 20,
      name: "Men Green Solid Zippered Full-Zip Slim Fit Bomber Jacket",
      category: "men",
      image: "../../assets/Assets/product_20.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 25,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      category: "kid",
      image: "../../assets/Assets/product_25.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 26,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      category: "kid",
      image: "../../assets/Assets/product_26.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 27,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      category: "kid",
      image: "../../assets/Assets/product_27.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 28,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      category: "kid",
      image: "../../assets/Assets/product_28.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 29,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      category: "kid",
      image: "../../assets/Assets/product_29.png",
      new_price: 85.0,
      old_price: 120.5,
    },
    {
      id: 30,
      name: "Boys Orange Colourblocked Hooded Sweatshirt",
      category: "kid",
      image: "../../assets/Assets/product_30.png",
      new_price: 85.0,
      old_price: 120.5,
    }
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
    console.log(this.route.snapshot.url[0].path)
  }

  ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.setImageSrc();
    });

    this.setImageSrc(); // Initial call to set the image source based on the current URL
    this.getFilteredProducts();
  }



  getFilteredProducts(): void {
    const currentUrl = this.router.url;

    if (currentUrl.includes('womens')) {
      this.filteredProducts = this.all_product.filter((product: any) => {
        return product.category === 'women';
      })
      console.log(this.filteredProducts);

    } else if (currentUrl.includes('mens')) {
      this.filteredProducts = this.all_product.filter((product: any) => {
        return product.category === 'men';
      })
    } else if (currentUrl.includes('kids')) {
      this.filteredProducts = this.all_product.filter((product: any) => {
        return product.category === 'kid';
      })
    } else {
      this.filteredProducts = [];
    }
  }

  setImageSrc(): void {
    const currentUrl = this.router.url;
    if (currentUrl.includes('womens')) {
      this.imageSrc = '../../assets/Assets/banner_women.png';
    } else if (currentUrl.includes('mens')) {
      this.imageSrc = '../../assets/Assets/banner_mens.png';
    } else if (currentUrl.includes('kids')) {
      this.imageSrc = '../../assets/Assets/banner_kids.png';
    } else {
      this.imageSrc = '../../assets/Assets/default_banner.png';
    }
  }

  viewProductDetail(product:any){
    console.log('viewProductDetail',product);
    this.router.navigate(["/product"],{queryParams:product.id})
  }
}
