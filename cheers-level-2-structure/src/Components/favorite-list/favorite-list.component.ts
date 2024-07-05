import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { test} from '../../../test';
import { CommonModule } from '@angular/common';
import { ActivatedRoute,Router } from '@angular/router';
import { CocktailsServiceService } from '../../services/cocktails-service.service';


@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [ProductListComponent,CommonModule],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.scss'
})
export class FavoriteListComponent {

  public favoriteProducts: any[] = [];

  constructor(private router: Router,private service:CocktailsServiceService) { }

  ngOnInit(): void {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    this.favoriteProducts = test.filter(product => favorites.includes(product.id));
  }

  viewDetail(productId: string): void {
    this.router.navigate(['/cocktail', productId]);
  }
  
}
