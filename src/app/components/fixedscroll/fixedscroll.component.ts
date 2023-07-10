import { Component, HostListener } from '@angular/core';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-fixedscroll',
  templateUrl: './fixedscroll.component.html',
  styleUrls: ['./fixedscroll.component.scss']
})
export class FixedscrollComponent {
  faChevronUp = faChevronUp;
  showScrollButton = false;
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showScrollButton = scrollPosition >= 600;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
