import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  userProfile: object;

  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
    const userOject = JSON.parse(localStorage.getItem('@userData'));
    this.userProfile = userOject;
  }
}
