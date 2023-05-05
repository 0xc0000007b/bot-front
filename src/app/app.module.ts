import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import {AppComponent} from "./app.component";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FilterByTimePipe} from "./pipes/filter-by-time.pipe";
import {FilterByDatePipe} from "./pipes/filter-by-date.pipe";
import {FilterByNamePipe} from "./pipes/filter-by-name.pipe";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BrowserModule} from "@angular/platform-browser";
import {PizzaService} from "./services/pizza.service";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "@danielmoncada/angular-datetime-picker";
import { FindByAddressPipe } from './pipes/find-by-address.pipe';




@NgModule({
  declarations: [AppComponent, FilterByTimePipe,
    FilterByDatePipe,
    FilterByNamePipe,
    FindByAddressPipe,],
  imports: [
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatRippleModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatFormFieldModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    BrowserModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  providers: [
    PizzaService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
