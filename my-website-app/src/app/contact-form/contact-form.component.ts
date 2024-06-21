import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  sendEmail() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const details = (document.getElementById('details') as HTMLTextAreaElement).value;
    window.location.href = `mailto:tmaddox@uwo.ca?subject=${encodeURIComponent(name)}&body=${encodeURIComponent(details)}`;
  }

  closeForm() {
    // Logic to close the form
  }
}
