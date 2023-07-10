import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { CarModelComponent } from './pages/car-model/car-model.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TestimonialComponent } from './pages/testimonial/testimonial.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'about', component: AboutComponent },
  { path: 'carmodel', component: CarModelComponent },
  { path: 'testimonial', component: TestimonialComponent},
  { path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
