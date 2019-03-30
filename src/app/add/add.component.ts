import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  book: Book = {
    name: null,
    read: null,
  };
  constructor(private bookService: BookService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  saveBook() {
      this.bookService.save(this.book).subscribe(next => {
          this.router.navigate(['reading-list']);
          alert('Create Success!');
      }, (error) => {
          console.log(error);
          alert('Error!');
      });
  }
}
