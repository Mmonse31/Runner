import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  email: string;
  password: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  signin(){
    const user = {
      email: this.email,
      password: this.password
    }
    this.http.post<any>('http://localhost:4000/api/users/signin', user).subscribe((res) => {
      if (res.isAuth) {
        localStorage.setItem('@userData', JSON.stringify(res.data));
        this.router.navigate(['/home']);
      }
    },
  
    err => {
        console.error('ha surgido un error', err);
    });
  }
  
}
