import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.state';
import { setUserName } from '../store/user/user.actions';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent {

  constructor(private store: Store<AppState>) {}

  onNameChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.store.dispatch(setUserName({ name: input.value }));
  }
}
