import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReadingListComponent} from './reading-list/reading-list.component';
import {ReadListComponent} from './read-list/read-list.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { AddComponent } from './add/add.component';

@NgModule({
    declarations: [
        AppComponent,
        ReadingListComponent,
        ReadListComponent,
        AddComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
