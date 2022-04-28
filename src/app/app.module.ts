import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { ListMedicalComponent } from './list-medical/list-medical.component';
import { PillsComponent } from './pills/pills.component';
import { AuthComponent } from './auth/auth.component';
import { AdminComponent } from './admin/admin.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMedicalComponent,
    PillsComponent,
    AuthComponent,
    AdminComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
