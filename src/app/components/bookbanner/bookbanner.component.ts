import { Component } from '@angular/core';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bookbanner',
  templateUrl: './bookbanner.component.html',
  styleUrls: ['./bookbanner.component.scss']
})
export class BookbannerComponent {
  faPhone = faPhone
}
