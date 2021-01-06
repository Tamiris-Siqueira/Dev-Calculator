import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public toastController: ToastController) {}

  numero1: string;
  numero2: string;
  numero3: string;
  numero4: string;
  numero5: string;
  numero6: string;
  cor: string;
  async mostrar(){
    if(this.numero1.trim() > "" && this.numero2.trim() > "" && this.numero3.trim() > "" && this.numero4.trim() > "" && this.numero5.trim() > "" && this.numero6.trim() > "") {
      this.cor = "#" + this.numero1.toUpperCase() + this.numero2.toUpperCase() + this.numero3.toUpperCase() + this.numero4.toUpperCase() + this.numero5.toUpperCase() + this.numero6.toUpperCase();
      const toast = await this.toastController.create({
        header: 'Resultado: ',
        message: 'A cor seleciona foi ' + this.cor + "\nObserve ao fundo!",
        duration: 7000,
        position: "middle",
        cssClass: "meutoast",
      });
      toast.present();
    }
  }
}
