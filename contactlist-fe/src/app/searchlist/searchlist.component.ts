import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { Contact } from "../model/Contact";

@Component({
    selector: 'search-list',
    templateUrl:'./searchlist.component.html'
})
export class SearchListComponent {
    contactList: any;
    constructor(private http: HttpClient) { }

    getListBySearch(searchText: string) {
        this.http.get<Contact[]>("http://localhost:8080/api/contactlist/" + searchText)
        .pipe(catchError(this.handleError<Contact[]>('getList', [])))
        .subscribe(data => { this.contactList = data })
    }

    private handleError<T> (operation = 'operation', result?:T){
        return (error: any): Observable<T> => {
            return of(result as T);
        }   
    }
}