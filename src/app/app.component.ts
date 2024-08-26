import { Component } from '@angular/core';
import { NavigationComponent } from '../Components/navigation/navigation.component';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FooterComponent } from '../Components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavigationComponent,
    RouterOutlet,
    RouterModule,
    FooterComponent,
    HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'E-commerce';
}
