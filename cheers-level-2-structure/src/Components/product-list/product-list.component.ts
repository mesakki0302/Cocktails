import { Component,NgModule,OnInit } from '@angular/core';
import { CocktailsServiceService } from '../../services/cocktails-service.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Router } from '@angular/router';
import { test } from '../../../test';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from "../../Pipes//filter.pipe"

@Component({
    selector: 'app-product-list,[app-product-list]',
    standalone: true,
    templateUrl: './product-list.component.html',
    styleUrl: './product-list.component.scss',
    imports: [HttpClientModule, RouterModule, CommonModule, FormsModule, FilterPipe]
})
export class ProductListComponent {

  public productList = test;
  public searchtext: string = '';
  public favorites: string[] = [];
  public favoriteProducts: any[] = [];

  constructor(private router: Router,private service:CocktailsServiceService) { }

  ngOnInit(): void {
    this.favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  }

  toggleFavorite(productId: string): void {
    if (this.favorites.includes(productId)) {
      this.favorites = this.favorites.filter(id => id !== productId);
    } else {
      this.favorites.push(productId);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  viewDetail(productId: string): void {
    this.router.navigate(['/cocktail', productId]);
  }

  goBack(){
    this.router.navigate(['ProductListComponent'])
  }
}
