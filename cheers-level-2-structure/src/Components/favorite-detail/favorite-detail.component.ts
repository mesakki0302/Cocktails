import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {test} from '../../../test';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { FavoriteListComponent } from '../favorite-list/favorite-list.component';
import { CocktailsServiceService } from '../../services/cocktails-service.service';

@Component({
  selector: 'app-favorite-detail',
  standalone: true,
  imports: [CommonModule,ProductListComponent,FavoriteListComponent],
  templateUrl: './favorite-detail.component.html',
  styleUrl: './favorite-detail.component.scss'
})
export class FavoriteDetailComponent {
  
 public product:any = [];
 public favorites:String[]=[];
 public favoriteProducts: any;
 public productList: any;

 constructor(private router:ActivatedRoute,private routers:Router, public service:CocktailsServiceService){}
 ngOnInit(){
  this.service.favorites
  const product= this.router.snapshot.paramMap.get('id');
  this.product = test.find(p=>p.id === product)
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
goBack(){
  this.routers.navigate(['cocktails'])
}
}
