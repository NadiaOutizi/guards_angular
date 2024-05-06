import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  registeredUsers: User[] = [];
  isLogged: boolean = false;
  currentUser: User | null = null;

  constructor() { }

  isLoggedIn(): boolean {
    return this.currentUser !== null && this.isLogged;
  }

  getCurrentUser(): User | null {
    return this.currentUser;
  }
}
