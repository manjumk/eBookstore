import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CartService } from '../cart.service';
import {books} from '../../Books';
@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  
  book;
  constructor(private route: ActivatedRoute,private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.book = books[+params.get('id')];
    });
  }
    
    addToCart(product) {
      window.alert('Your product has been added to the cart!');
      this.cartService.addToCart(product);
    }
  

}
