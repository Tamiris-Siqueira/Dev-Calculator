import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { IonRadio, IonRadioGroup } from '@ionic/angular';
import { ValueAccessor } from '@ionic/angular/directives/control-value-accessors/value-accessor';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertController: AlertController) {}
  numero: string;
  valor_x: number;
  valor_y: number;
  base_x: string;
  base_y: string;
  resultado: any;
  async bases() { 
    let final: string;
    switch (this.base_x) {
      case 'bin':    
        this.valor_x = 2; console.log("De: 2");  break;
      case 'dec': 
        this.valor_x = 10; console.log("De: 10"); break;
      case 'octal': 
        this.valor_x = 8; console.log("De: 8"); break;
      case 'hexa': 
        this.valor_x = 16; console.log("De: 16"); break;
      default:
        this.resultado = "Conversão inválida"; break;
    }

    switch (this.base_y){ 
      case 'bin':
        this.valor_y = 2; console.log("Para: 2"); break;
      case 'octal':
        this.valor_y = 8; console.log("Para: 8"); break;
      case 'dec':
        this.valor_y = 10; console.log("Para: 10"); break;
      case 'hexa':
        this.valor_y = 16; console.log("Para: 16"); break;
      default:
        this.resultado = "Conversão inválida"; break;
    } 
    if(this.numero.trim() > "")
    {
      final = parseInt(this.numero, this.valor_x).toString(this.valor_y);   
      this.resultado = final; 
      const alert = await this.alertController.create({
        header: 'Resultado:' ,  
        message: `O número convertido é: ${this.resultado}`,
        buttons: ['OK!'],
      });
      await alert.present();
    }
  }
}
