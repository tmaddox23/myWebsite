import { createReducer, on } from '@ngrx/store';
import { setUserName } from './user.actions';

export interface UserState {
  name: string;
}

export const initialState: UserState = {
  name: ''
};

export const userReducer = createReducer(
  initialState,
  on(setUserName, (state, { name }) => ({ ...state, name }))
);
