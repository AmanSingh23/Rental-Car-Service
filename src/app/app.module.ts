import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FaqComponent } from './components/faq/faq.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './pages/about/about.component';
import { PlansectionComponent } from './components/plansection/plansection.component';
import { BookbannerComponent } from './components/bookbanner/bookbanner.component';
import { CarModelComponent } from './pages/car-model/car-model.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookingsectionComponent } from './components/bookingsection/bookingsection.component';
import { CarcontainerComponent } from './components/carcontainer/carcontainer.component';
import { FixedscrollComponent } from './components/fixedscroll/fixedscroll.component';
import { PicksectionComponent } from './components/picksection/picksection.component';
import { BannersectionComponent } from './components/bannersection/bannersection.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FaqComponent,
    FooterComponent,
    AboutComponent,
    PlansectionComponent,
    BookbannerComponent,
    CarModelComponent,
    TestimonialComponent,
    TestimonialsComponent,
    ContactComponent,
    BookingsectionComponent,
    CarcontainerComponent,
    FixedscrollComponent,
    PicksectionComponent,
    BannersectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
