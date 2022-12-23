import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookingsComponent } from './bookings/bookings.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { CardComponent } from './card/card.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { SignupComponent } from './signin/signup.component';
import { HttpClientModule } from '@angular/common/http'
import { PatientRegisterComponent } from './registration/register.component';
import { BookingsummaryComponent } from './bookingsummary/bookingsummary.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
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
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
