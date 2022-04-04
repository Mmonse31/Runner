import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    const object = JSON.parse(localStorage.getItem('@userData'));
    console.log(object);

    this.user = object.firstName;
  }
}
