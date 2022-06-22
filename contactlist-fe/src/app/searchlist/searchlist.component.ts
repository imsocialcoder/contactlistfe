import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Contact } from "../model/Contact";

@Component({
    selector: 'search-list',
    templateUrl:'./searchlist.component.html'
})
export class SearchListComponent {
    contactList: any;
    constructor(private http: HttpClient) { }

    getList(searchText: string) {
        this.http.get<Contact[]>("http://localhost:8080/api/contactlist/" + searchText).subscribe(data => { this.contactList = data })
    }
}