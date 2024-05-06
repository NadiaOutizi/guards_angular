import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;
    
  constructor(private router:Router,private userService: UserService) { }

  ngOnInit(): void {
  }

  login() {
    
    const userDataJSON = localStorage.getItem('registeredUsers');
    if (!userDataJSON) {
      console.log('No registered users found');
      return;
    }


    const registeredUsers: User[] = JSON.parse(userDataJSON);

    try {
      
      const user: User | undefined = registeredUsers.find(u => u.username === this.username && u.password === this.password);
      if (user) {
        console.log('Login successful');
        this.userService.isLogged = true; 
        user.isAdmin ===true ? localStorage.setItem('isad','true') : localStorage.setItem('isad','false');
        this.router.navigate(['/listarticle']);
      } else {
        console.log('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  }
}
