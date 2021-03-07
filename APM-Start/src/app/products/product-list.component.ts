import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product-service';

@Component({
//  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  pageTitle = 'Product List';
  imageWidth = 40;
  imageMargin = 2;
  showImage = false;
  private _listFilter: string;
  errorMessage: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = value
      ? this.performFilter(this.listFilter)
      : this.products;
  }
  filteredProducts: IProduct[];
  products: IProduct[];

  constructor(private productService: ProductService) {
    //this.listFilter = 'cart';
  }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void {
    console.log('In OnInit of product-list');

    // this.products = this.productService.getProducts();

    this.productService.getProducts().subscribe({
      next: (prod) => {
        (this.products = prod), (this.filteredProducts = this.products);
      },
      error: (err) => (this.errorMessage = err),
    });

    // following method's "this" is method scope, do not use
    // this.productService.getProducts2().subscribe({
    //   next (prod) (this.products = prod),
    //   error (err) (this.errorMessage = err),
    // });
  }
  performFilter(listFilter: string): IProduct[] {
    listFilter = listFilter.toLocaleLowerCase();
    return this.products.filter(
      (p: IProduct) =>
        p.productName.toLocaleLowerCase().indexOf(listFilter) !== -1
    );
  }

  onNotify(message: string): void {
    console.log(message);
    this.pageTitle = 'Product List' + message;
  }
}
