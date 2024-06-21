import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { selectUserName } from '../store/user/user.selectors';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  @Input() bannerText: string = '';
  userName: string = '';

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectUserName).subscribe(name => {
      this.userName = name;
    });
  }
}
