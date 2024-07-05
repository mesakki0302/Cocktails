import { Component} from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../Components/product-list/product-list.component';
import { FavoriteListComponent } from '../Components/favorite-list/favorite-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterModule,CommonModule,ProductListComponent,RouterOutlet,FavoriteListComponent],
  templateUrl: 'app.component.html',
})
export class AppComponent {

}
