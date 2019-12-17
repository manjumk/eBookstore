import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import {RouterModule,Routes} from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { HeaderbarComponent } from './headerbar/headerbar.component';
import { BookdetailComponent } from './bookdetail/bookdetail.component';
import {SearchTextPipe} from './search-text.pipe';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component:BookListComponent },
  { path: 'books/:bookid', component:BookdetailComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    HeaderbarComponent,
    BookdetailComponent,
    SearchTextPipe,
    CartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
