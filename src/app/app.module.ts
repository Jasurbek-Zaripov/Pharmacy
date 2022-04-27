import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ListMedicalComponent } from './list-medical/list-medical.component';
import { PillsComponent } from './pills/pills.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMedicalComponent,
    PillsComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
