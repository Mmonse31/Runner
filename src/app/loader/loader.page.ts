import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  constructor() { }

  ngOnInit() {
      var count = 8;
      setInterval(function(){
          count--;
          if (count == 0) {
              window.location.href = '/registration'; 
          }
      },1000);
  }
  }

