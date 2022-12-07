import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { OffersComponent } from './offers/offers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule} from '@angular/router';
import { BookingsComponent } from './bookings/bookings.component';
import {routes} from './app-routing.module';
import { PaymentpageComponent } from './bookingpage/paymentpage/paymentpage.component';
import { CardComponent } from './card/card.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { SignupComponent } from './signup/signup.component';
import { RegistrationComponent } from './registration/registration.component';
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
    RegistrationComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
