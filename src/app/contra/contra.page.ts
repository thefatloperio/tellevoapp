import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-contra',
  templateUrl: './contra.page.html',
  styleUrls: ['./contra.page.scss'],
})
export class ContraPage implements OnInit {

  formularioContra : FormGroup;

  constructor(public fb: FormBuilder,
    public alertController : AlertController,
    public navCtrl: NavController) { 

    this.formularioContra = this.fb.group({
      'correo': new FormControl("",Validators.required)
    });
  }

  ngOnInit() {
  }

   async recuperar(){
    const alert = await this.alertController.create({
      header: 'enviado',
      message: 'se te a enviado un link a tu correo electronico',
      buttons: ['Aceptar']
    });

    await alert.present();
  }
}


