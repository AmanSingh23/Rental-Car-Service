import { Component } from '@angular/core';
import { FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';
import { faEnvelope, faEnvelopeOpen, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  faPhone = faPhone;
  faEnvelope = faEnvelope;
  faMapMarker = faMapMarker
  faEnvelopeOpen = faEnvelopeOpen;
  isEmailValid: Boolean = true;
  isTellUsValid: Boolean = true;
  myForm = new FormGroup({
    name: new FormControl( '',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    tellus: new FormControl('',[Validators.required, Validators.minLength(20)])
  });
  onSubmit() {
    this.checkFormValidity();
  }

  checkFormValidity() {
    if(this.myForm.invalid) {
      this.isEmailInvalid();
      this.istellUsInvalid();
    }
    else {
      //send data
    }
  }

  isEmailInvalid() {
    if(this.myForm.controls.email.dirty && this.myForm.controls.email.invalid) {
      this.isEmailValid = false;
    }
    else {
      this.isEmailValid = true;
    }
  }

  istellUsInvalid() {
    if(this.myForm.controls.tellus.dirty && this.myForm.controls.tellus.invalid) {
      this.isTellUsValid = false;
    }
    else {
      this.isTellUsValid = true;
    }
  }
}
