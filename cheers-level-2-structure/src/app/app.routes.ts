import { Routes } from '@angular/router';
import { ProductListComponent } from '../Components/product-list/product-list.component';
import { FavoriteListComponent } from '../Components/favorite-list/favorite-list.component';
import { FavoriteDetailComponent } from '../Components/favorite-detail/favorite-detail.component';

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cocktails',component:ProductListComponent},
  { path: 'favorites', component: FavoriteListComponent },
  { path: 'cocktail/:id', component: FavoriteDetailComponent}
];
