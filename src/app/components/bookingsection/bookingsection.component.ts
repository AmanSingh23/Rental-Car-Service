import { Component } from '@angular/core';
import { faCalendarDays, faCar, faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bookingsection',
  templateUrl: './bookingsection.component.html',
  styleUrls: ['./bookingsection.component.scss']
})
export class BookingsectionComponent {
  faCar = faCar;
  faLocationDot = faLocationDot;
  faCalendarDays = faCalendarDays;
}
