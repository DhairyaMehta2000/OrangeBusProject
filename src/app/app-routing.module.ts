import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PaymentpageComponent } from './paymentpage/paymentpage.component';
import { FaqComponent } from './faq/faq.component';
import { SignupComponent } from './signin/signup.component';
import { PatientRegisterComponent } from './registration/register.component';
import { BookingsummaryComponent } from './bookingsummary/bookingsummary.component';
import { RouteguardService } from './routeguard.service';


export const routes: Routes = [
  // {path:'offers',component:OffersComponent},
  {path:'bookings',component:BookingsComponent},
  {path:'payment',component:PaymentpageComponent},
  {path:'cancel',component:CancelticketComponent},
  {path:'home-page',component:HomeComponent},
  {path:'card',component:CardComponent},
  {path:'booking',component:BookingpageComponent,canActivate:[RouteguardService]},
  {path:'registration',component:PatientRegisterComponent},
  {path:'faq',component:FaqComponent},
  {path:'signin',component:SignupComponent},
  {path:'bookingsummary',component:BookingsummaryComponent,canActivate:[RouteguardService]},
  {path:'',redirectTo:'/registration',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
