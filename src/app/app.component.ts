import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Menu', url: '/home', icon: 'home' },
    { title: 'Profile', url: '/loader', icon: 'mail' },
    { title: 'Search Friend', url: '/registration', icon: 'paper-plane' },
    { title: 'Places', url: '/loader', icon: 'load' },
    { title: 'Graphs', url: '/folder/Trash', icon: 'trash' },
    { title: 'Signout', url: '/folder/Spam', icon: 'warning' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
