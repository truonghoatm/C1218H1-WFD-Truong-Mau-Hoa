import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css']
})
export class ReadingListComponent implements OnInit {
  books: Book[] = [];

  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.bookService.getAll().subscribe((data: Book[]) => {
      this.books = data;
    });
    // this.getUnreadBooks();
  }

  getUnreadBooks() {
    return this.bookService.getAll().subscribe((datas) => {
      this.books = datas.filter(t => t.read !== true);
    });
  }
  changeStatus(books: Book) {
    this.bookService.update(books);
  }
}
