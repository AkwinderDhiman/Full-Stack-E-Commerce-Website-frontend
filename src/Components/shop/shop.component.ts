import { Component } from '@angular/core';
import { PopularComponent } from '../popular/popular.component';
import { HeroComponent } from '../hero/hero.component';
import { OfferComponent } from '../offer/offer.component';
import { NewCollectionComponent } from '../new-collection/new-collection.component';
import { NewLetterComponent } from '../new-letter/new-letter.component';
@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [HeroComponent,
    PopularComponent,
    OfferComponent,
    NewCollectionComponent,
    NewLetterComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}
