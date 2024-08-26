import { Routes } from '@angular/router';
import { ShopCategoryComponent } from '../Components/shop-category/shop-category.component';
import { ShopComponent } from '../Components/shop/shop.component';
import { ProductComponent } from '../Components/product/product.component';
import { CartComponent } from '../Components/cart/cart.component';
import { SignInComponent } from '../Components/sign-in/sign-in.component';
import { ProfileComponent } from '../Components/profile/profile.component';
// import { ShopComponent } from '../Components/shop/shop.component';

export const routes: Routes = [
  {
    path: '',
    component: ShopComponent,
    title: 'Women'
  },
  {
    path: 'mens',
    component: ShopCategoryComponent
  },
  {
    path: 'womens',
    component: ShopCategoryComponent,
    title: 'Women'
  },
  {
    path: 'kids',
    component: ShopCategoryComponent,
    title: ''
  },
  {
    path: 'product',
    component: ProductComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
];
