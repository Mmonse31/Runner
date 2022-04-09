import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bestofweek',
  templateUrl: './bestofweek.page.html',
  styleUrls: ['./bestofweek.page.scss'],
})
export class BestofweekPage implements OnInit {

  userProfile: object;

  constructor(private http: HttpClient, private router: Router) { }
  ngOnInit() {
    const userOject = JSON.parse(localStorage.getItem('@userData'));
    this.userProfile = userOject;
  }
}
