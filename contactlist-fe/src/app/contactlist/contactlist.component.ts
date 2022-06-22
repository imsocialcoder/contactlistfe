import { AnimateTimings } from "@angular/animations";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { catchError, Observable, of } from "rxjs";
import { Contact } from '../model/Contact'

@Component({
    selector: 'contact-list',
    templateUrl: './contactlist.component.html'
})
export class ContactListComponent implements OnInit{
    contactList: any;
    constructor(private http: HttpClient) { }

    ngOnInit(): void {
        this.getList();
    }

    getList():void{
        this.http.get<Contact[]>("http://localhost:8080/api/contactlist")
            .pipe(catchError(this.handleError<Contact[]>('getList', [])))
            .subscribe(data => { this.contactList = data })
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            return of(result as T);
        }
    }
}