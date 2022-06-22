import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <contact-list></contact-list>
  <search-list></search-list>
  <paging-list></paging-list>
  `,
})
export class AppComponent {
  title = 'contactlist-fe';
}
