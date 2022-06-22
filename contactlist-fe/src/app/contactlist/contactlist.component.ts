import { AnimateTimings } from "@angular/animations";
import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import  { Contact} from '../model/Contact'

@Component({
    selector: 'contact-list',
    templateUrl:'./contactlist.component.html'
})
export class ContactListComponent {
    contactList: any;
    constructor(private http:HttpClient){}

    getList(){
        this.http.get<Contact[]>("http://localhost:8080/api/contactlist").subscribe (data => {this.contactList = data})
    }
}