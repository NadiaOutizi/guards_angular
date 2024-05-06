import { Component, Injectable, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  username!: string; 
  email!: string;
  password!: string;
  confirmPassword!: string;
  isAdmin!:boolean;
  user!:User;
  constructor(private userService: UserService, private router: Router) { 
    this.user= new User();
  }

  ngOnInit(): void {
  }

  register() {
    // Check if username or email already exists
    const existingUser = this.userService.registeredUsers.find(user => user.username === this.username || user.email === this.email);
    if (existingUser) {
      console.log('User already exists');
      return;
    }

       
    if (this.username.toLowerCase() === 'nadia' || this.username.toLowerCase() === 'admin') {
      console.log('nadia');
      this.user.isAdmin = true;
    }
 
    const newUser: User = {
      username: this.username,
      email: this.email,
      password: this.password,
      isAdmin: this.user.isAdmin 
    };

    const registeredUsersJSON = localStorage.getItem('registeredUsers');
    this.userService.registeredUsers = registeredUsersJSON ? JSON.parse(registeredUsersJSON) : [];
    this.userService.registeredUsers.push(newUser);
    console.log(this.userService.registeredUsers);
    localStorage.setItem('registeredUsers',JSON.stringify(this.userService.registeredUsers));
    this.userService.isLogged = true ;
    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.router.navigate(['/']);
  }
}
