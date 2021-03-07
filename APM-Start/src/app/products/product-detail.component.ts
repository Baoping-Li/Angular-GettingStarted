import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './product';

@Component({
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail';
  product: IProduct | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.product = {
      productId: id,
      productName: 'ahaaah',
      starRating: 3,
      description: 'asdfkjas;dfklj',
      productCode: 'adc',
      releaseDate: 'asdfsd',
      price: 343,
      imageUrl: '2222',
    };
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }
}
