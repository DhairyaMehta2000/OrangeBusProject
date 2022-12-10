import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { OffersComponent } from './offers/offers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BookingsComponent } from './bookings/bookings.component';

import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { CardComponent } from './card/card.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { SignupComponent } from './signup/signup.component';
import { RegistrationComponent } from './registration/registration.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    OffersComponent,
    PageNotFoundComponent,
    BookingsComponent,
    PaymentpageComponent,
    CardComponent,
    CancelticketComponent,
    BookingpageComponent,
    SignupComponent,
    RegistrationComponent,
    BookingsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule 
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
