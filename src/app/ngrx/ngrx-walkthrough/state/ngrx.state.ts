import { Book } from '../book-list/books.model';

export interface NgrxState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
}
