import { ContactListComponent } from "./app/contactlist/contactlist.component";
import { PagingListComponent } from "./app/paging/paging.component";
import { SearchListComponent } from "./app/searchlist/searchlist.component";

export const appRoutes = [
    {path: '', component: ContactListComponent},
    {path: 'search', component: SearchListComponent},
    {path: 'paging', component: PagingListComponent}
]