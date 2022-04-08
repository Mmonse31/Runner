import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-finish-sucess',
  templateUrl: './finish-sucess.page.html',
  styleUrls: ['./finish-sucess.page.scss'],
})
export class FinishSucessPage implements OnInit {

  constructor() { }

  ngOnInit() {
    var count = 5;
    setInterval(function(){
        count--;
        if (count == 0) {
            window.location.href = '/home'; 
        }
    },1000);
  }

}
