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
// import { RegisterationComponent } from './registration/patient-register.component'
import {HttpClientModule} from '@angular/common/http'
import { PatientRegisterComponent } from './registration/patient-register.component';
import { BookingsummaryComponent } from './bookingsummary/bookingsummary.component';
// import { CookieService } from 'ngx-cookie-service';
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
    PatientRegisterComponent,
    BookingsComponent,
    BookingsummaryComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule ,
    // CookieService
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
