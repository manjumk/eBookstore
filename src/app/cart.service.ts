import { Injectable } from '@angular/core';
import {books} from '../Books';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(book) {
    this.items.push(book);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
