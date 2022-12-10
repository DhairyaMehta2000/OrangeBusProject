import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { RegistrationComponent } from './registration/registration.component';
import { FaqComponent } from './faq/faq.component';
import { SignupComponent } from './signup/signup.component';


export const routes: Routes = [
  {path:'offers',component:OffersComponent},
  {path:'bookings',component:BookingsComponent},
  {path:'payment',component:PaymentpageComponent},
  {path:'cancel',component:CancelticketComponent},
  {path:'home-page',component:HomeComponent},
  {path:'card',component:CardComponent},
  {path:'booking',component:BookingpageComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'faq',component:FaqComponent},
  {path:'signup',component:SignupComponent},
  {path:'',redirectTo:'/home-page',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
