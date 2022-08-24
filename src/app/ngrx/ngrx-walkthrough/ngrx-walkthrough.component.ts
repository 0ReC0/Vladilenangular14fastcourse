import {Component, OnInit} from '@angular/core';
import {GoogleBooksService} from './book-list/books.service'
import {Store} from "@ngrx/store";
import {addBook, removeBook, retrievedBookList} from "./state/books.actions";
import {NgrxState} from "./state/ngrx.state";
import {selectBookCollection, selectBooks} from "./state/books.selectors";

@Component({
  selector: 'app-ngrx-walkthrough',
  templateUrl: './ngrx-walkthrough.component.html',
  styleUrls: ['./ngrx-walkthrough.component.css']
})
export class NgrxWalkthroughComponent implements OnInit {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  constructor(
    private booksService: GoogleBooksService,
    private store: Store<NgrxState>
  ) {
  }

  onAdd(bookId: string) {
    this.store.dispatch(addBook({bookId}));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({bookId}));
  }

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({books})));
  }

}
