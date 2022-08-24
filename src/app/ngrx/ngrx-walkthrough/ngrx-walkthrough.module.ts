import {NgModule} from "@angular/core";
import {NgrxWalkthroughComponent} from "./ngrx-walkthrough.component";
import {BookCollectionComponent} from "./book-collection/book-collection.component";
import {BookListComponent} from "./book-list/book-list.component";
import {BrowserModule} from "@angular/platform-browser";
import {booksReducer} from "./state/books.reducer";
import {collectionReducer} from "./state/collection.reducer";
import {GoogleBooksService} from "./book-list/books.service";
import {HttpClientModule} from "@angular/common/http";
import { StoreModule } from "@ngrx/store";


@NgModule({
  declarations: [
    BookListComponent,
    BookCollectionComponent,
    NgrxWalkthroughComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forFeature('books', booksReducer),
    StoreModule.forFeature('collection', collectionReducer),
  //  TODO: combine features into one, because of logic assigment to ngrx module in application
  ],
  providers: [GoogleBooksService],
  exports: [NgrxWalkthroughComponent]
})
export class NgrxWalkThroughModule {
}
