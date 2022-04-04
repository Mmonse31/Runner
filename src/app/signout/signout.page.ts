import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signout',
  templateUrl: './signout.page.html',
  styleUrls: ['./signout.page.scss'],
})
export class SignoutPage implements OnInit {

  firstName: string;
  lastName: string;
  weight: number;
  height: number;
  email: string;
  password: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveUser(){
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      weight: this.weight,
      height: this.height,
      email: this.email,
      password: this.password
    }

    this.http.post<any>('http://localhost:4000/api/users/guardar', user).subscribe((res) => {
      console.log('res', res);  
      if (res.status === 200) {
        this.router.navigate(['/signin']);
      }
    },
  
    err => {
        console.error('ha surgido un error', err);
    });
  }
  
}
