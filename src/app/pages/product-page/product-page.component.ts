import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {IProduct} from "../../models/IProduct";
import {ModalService} from "../../services/modal.service";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit, OnDestroy {
  title = 'vladilenAngular14fastcourse';
  // products: IProduct[] = data;
  // products: IProduct[] = [];
  products$: Observable<IProduct[]>;
  loading = false;
  term = '';
  sub: Subscription;

  constructor(
    protected modalService: ModalService,
    private productsService: ProductsService) {
    this.products$ = this.productsService.products$;
  }

  ngOnInit(): void {
    this.loading = true;
    this.sub = this.productsService.getAll()
      .subscribe(() => {
        this.loading = false
      });

    // this.productsService.getAll()
    //   .subscribe(
    //     products => this.products = products,
    //     err => console.error(err),
    //     () => this.loading = false);
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
