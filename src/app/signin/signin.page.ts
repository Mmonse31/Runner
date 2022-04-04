import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

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

  signin(){
    const user = {
      email: this.email,
      password: this.password
    };

    this.http.post<any>('http://localhost:4000/api/users/signin', user).subscribe(async (res) => {
      if (res.isAuth) {
        await this.presentToast('Sesion iniciada', 'success');
        localStorage.setItem('@userData', JSON.stringify(res.data));
        this.router.navigate(['/home']);
      }
    },
    async err => {
        await this.presentToast('Email y/o contraseña incorrecta', 'danger');
        console.error('ha surgido un error', err);
    });
  }
}
