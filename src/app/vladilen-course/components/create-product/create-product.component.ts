import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ProductsService } from 'src/app/vladilen-course/services/products.service';
import {IProduct, IRating} from "../../models/IProduct";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  form = new FormGroup({
    title: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(4)
    ])
  });

  get titleFormControl(): FormControl {
    return this.form.get('title') as FormControl;
  }

  constructor(
    private productsService: ProductsService,
    private modalService: ModalService
  ) {

  }

  ngOnInit(): void {
  }

  submit() {
    const product: IProduct = {
      title: this.titleFormControl.value,
      price: 13.5,
      description: 'lorem ipsum set',
      image: 'https://i.pravatar.cc',
      category: 'electronic',
      rating: {
        rate: 42,
        count: 1
      } as IRating
    };
    this.productsService.create(product)
      .subscribe(
        () => {
          this.modalService.close();
        }
      );
  }
}
