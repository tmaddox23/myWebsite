import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  constructor(public dialog: MatDialog) {}

  openContactForm(): void {
    this.dialog.open(ContactFormComponent, {
      width: 'auto',
      height: 'auto',
      disableClose: true, // Prevent closing by clicking outside
      hasBackdrop: false  // No backdrop
    });
  }
}
