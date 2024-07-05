import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { test } from '../../test';

@Injectable({
  providedIn: 'root'
})
export class CocktailsServiceService {

  public productList = test;
  public favorites: string[] = [];
  public favoriteProducts: any[] = [];

  constructor() {
  }

  /*toggleFavorite(productId: string): void {
    const index = this.favorites.indexOf(productId);
    if (index > -1) {
      this.favorites.splice(index, 1);
      
    } else {
       this.favorites.push(productId);
    }
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
    this.updateFavoriteProducts();
  }*/

  updateFavoriteProducts(): void {
    this.favoriteProducts = this.productList.filter(product => this.favorites.includes(product.id));
  }

  }


