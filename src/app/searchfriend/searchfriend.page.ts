import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-searchfriend',
  templateUrl: './searchfriend.page.html',
  styleUrls: ['./searchfriend.page.scss'],
})
export class SearchfriendPage implements OnInit {

  email: string;
  constructor(private http: HttpClient, private router: Router,  public toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast(msg, type) {
    const toast = await this.toastController.create({
      position: 'top',
      color: type,
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  searchFriend(){
    const friend = {
    email: this.email
  };

  this.http.post<any>('http://localhost:4000/api/users/searchFriend', friend).subscribe(async (res) => {
  if (res.isAuth) {
      await this.presentToast('Amigo encontrado', 'success');
      localStorage.setItem('@userFriend', JSON.stringify(res.dataFriend));
      this.router.navigate(['/profilefriend']);
    }
  },
  async err => {
      await this.presentToast('No se encontro al usuario que estas tratando de encontrar', 'danger');
      console.error('ha surgido un error', err);
  });
}
}