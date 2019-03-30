import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from './book';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private readonly API_URL = 'http://[::]:8081/books';

    constructor(private http: HttpClient) {
    }

    getAll(): Observable<Book[]> {
        return this.http.get<Book[]>(this.API_URL);
    }

    save(book: Book) {
        return this.http.post(this.API_URL, book);
    }

    destroy(id: number): Observable<any> {
        return this.http.post(`${this.API_URL}/${id}`, null);
    }
    update(books: Book) {
        return this.http.patch(`${this.API_URL}/${books.id}`, books.read );
    }

}
