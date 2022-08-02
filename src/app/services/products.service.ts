import {Injectable} from "@angular/core";
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {IProduct} from "../models/IProduct";
import {BehaviorSubject, Observable, throwError} from "rxjs";
import {catchError, delay, retry, tap} from "rxjs/operators";
import {ErrorService} from "./error.service";

@Injectable({
  providedIn: 'root'
})

export class ProductsService {
  products$: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);

  constructor(
    private http: HttpClient,
    private errorService: ErrorService
  ) {

  }

  getAll(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('https://fakestoreapi.com/products', {
      params: new HttpParams({
        fromObject: {
          limit: 5
        }
      })
    })
      .pipe(
        delay(200),
        retry(2),
        tap(products => this.products$.next(products)),
        catchError(this.errorHandler.bind(this))
      );
  }

  create(product: IProduct): Observable<IProduct> {
    console.table(product)
    return this.http.post<IProduct>('https://fakestoreapi.com/products', product)
      .pipe(
        tap(product => {
          this.products$.next([...this.products$.value, product]);
        })
      );
  }

  private errorHandler(error: HttpErrorResponse) {
    this.errorService.handle(error.message);
    return throwError(() => error.message);
  }
}
