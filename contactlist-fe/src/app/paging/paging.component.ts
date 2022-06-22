import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { Contact } from "../model/Contact";

@Component({
    selector: 'paging-list',
    templateUrl: './paging.component.html'
})
export class PagingListComponent {
    contactList: any;
    constructor(private http: HttpClient) { }

    getListByPaging(page: string, size: string) {
        this.http.get<Contact[]>("http://localhost:8080/api/contactlist/paging?page=" + page + "&size=" + size)
            .pipe(catchError(this.handleError<Contact[]>('getList', [])))
            .subscribe(data => { this.contactList = data })
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            return of(result as T);
        }
    }
}