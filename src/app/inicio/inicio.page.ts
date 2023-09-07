import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public navCtrl: NavController,
    public alertController : AlertController) { }

  ngOnInit() {
  }

  user = localStorage.getItem('usuario')
  
  


  
  async cerrar() {
        const alert = await this.alertController.create({
          header: 'cerrar sesión',
          message: '¿ya te vas?',
          buttons: [
            {
              text:'no',
              handler:() => {
              }
          },{
            text:'si',
              handler:() => {
                localStorage.removeItem('ingresado');
                this.navCtrl.navigateRoot('login');
            }
          }
        ]
        });

        await alert.present();
      }
    }

