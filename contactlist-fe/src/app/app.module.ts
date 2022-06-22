import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routes';

import { AppComponent } from './app.component';
import { ContactListComponent } from './contactlist/contactlist.component';
import { SearchListComponent } from './searchlist/searchlist.component';
import { PagingListComponent } from './paging/paging.component';
import { HttpClientModule }  from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    SearchListComponent,
    PagingListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
