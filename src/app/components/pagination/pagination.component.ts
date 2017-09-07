import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() paginationMapFavourites;
  @Input() pageSize;
  @Input() currentPage;
  @Output() returnCurrentPage: EventEmitter<any> = new EventEmitter();
  private pages: Array<any> = [];
  numberOfPages = 0;

  constructor() {
    if (!this.currentPage) this.currentPage = 0;
  }

  ngOnInit() {
    const totalPages = this.paginationMapFavourites.length / this.pageSize;
    this.pages = this._preparePages(totalPages, this.pageSize, this.paginationMapFavourites);
    this.numberOfPages = this.pages.length;
    this._getCurrentPage(this.currentPage);
  }

  private _getCurrentPage(pageNumber) {
    this.returnCurrentPage.emit(this.pages[pageNumber]);
  }

  getNextPage() {

    if (this.currentPage < this.numberOfPages - 1) {
      this.currentPage++;
      this._getCurrentPage(this.currentPage);
    }
  }

  getPrevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this._getCurrentPage(this.currentPage);
    }
  }


  _preparePages(totalPages, pageSize, contents): Array<any> {
    let pages = [];
    let page = [];
    let itemCounter = 0;
    contents.forEach((pageItem, pageItemIndex) => {
      itemCounter++;
      if (itemCounter === pageSize) {
        itemCounter = 0;
        page.push(pageItem);
        pages.push(page);
        page = [];
      } else {
        page.push(pageItem);
      }
    })
    return pages;
  }

}
