import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Book} from "./books.model";
import {map} from "rxjs/operators";

@Injectable()
export class GoogleBooksService {
  constructor(private http: HttpClient) {
  }

  private mockData: Array<Book> = [
    {
      id: '1',
      volumeInfo: {
        title: '2',
        authors: ['2', '3']
      }
    },
    {
      id: '2',
      volumeInfo: {
        title: '3',
        authors: ['4', '5']
      }
    },
  ]

  getBooks(): Observable<Array<Book>> {
    // return this.http.get<{ items: Book[] }>(`url`)
    //   // .pipe(map(data => data.items || []))
    //   .pipe(map(data => data.items || this.mockData))
    return of(this.mockData)
  }

}
