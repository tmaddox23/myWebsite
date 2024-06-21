import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from './contact-form/contact-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  bannerText: string = '';

  constructor(
    public dialog: MatDialog, 
    private router: Router) {}

  openContactForm() {
    this.dialog.open(ContactFormComponent);
  }
  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        switch (this.router.url) {
          case '/experience':
            this.bannerText = 'Experience';
            break;
          case '/education':
            this.bannerText = 'Education';
            break;
          case '/interests':
            this.bannerText = 'Interests';
            break;
          case '/projects':
            this.bannerText = 'Projects';
            break;
          case '/blog':
            this.bannerText = 'Blog';
            break;
          default:
            this.bannerText = 'Welcome to my site! Enjoy!';
            break;
        }
      }
    });
  }
}
