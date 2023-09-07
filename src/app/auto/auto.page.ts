import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
@Component({
  selector: 'app-auto',
  templateUrl: './auto.page.html',
  styleUrls: ['./auto.page.scss'],
})
export class AutoPage implements OnInit {
  formularioRegistroauto: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController : AlertController,
    public navCtrl: NavController) { 

    this.formularioRegistroauto = this.fb.group({
      'costo': new FormControl("",Validators.required),
      'tag': new FormControl("",Validators.required),
      'cantperson': new FormControl("",Validators.required),
      'destino': new FormControl("",Validators.required),

    });

  }
  ngOnInit() {
  }

  async guardar(){
    var reg = this.formularioRegistroauto.value;

    if(this.formularioRegistroauto.invalid){
      console.log('El formulario es inválido');
      const alert = await this.alertController.create({
        header: 'Te faltan datos',
        message: 'Llena todos los campos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
  
    var usuario = {
      nombre: reg.nombre,
      contraseña: reg.contraseña
    }
    localStorage.setItem('usuario',JSON.stringify(usuario));

    localStorage.setItem('ingresado', 'true');
    this.navCtrl.navigateRoot('login');
  }

}

