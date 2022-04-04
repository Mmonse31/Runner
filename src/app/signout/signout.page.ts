import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

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

  constructor(private http: HttpClient, private router: Router, public toastController: ToastController) { }

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

  async saveUser() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      weight: this.weight,
      height: this.height,
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://localhost:4000/api/users/guardar', user).subscribe(async (res) => {
      console.log('res', res);
      if (res.status === 200) {
        await this.presentToast('Se ha guardado correctamente', 'success');
        this.router.navigate(['/signin']);
      }
    },

    async err => {
        await this.presentToast('No se ha podido registrar', 'danger');
        console.error('ha surgido un error', err);
    });
  }

}
