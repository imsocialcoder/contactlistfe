import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Contact } from "../model/Contact";

@Component({
    selector: 'paging-list',
    templateUrl:'./paging.component.html'
})
export class PagingListComponent {
    contactList: any;
    constructor(private http: HttpClient) { }

    getList(page: string, size: string) {
        this.http.get<Contact[]>("http://localhost:8080/api/contactlist/paging?page=" + page + "&size=" + size).subscribe(data => { this.contactList = data })
    }
}