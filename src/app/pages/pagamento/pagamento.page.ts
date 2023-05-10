import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.page.html',
  styleUrls: ['./pagamento.page.scss'],
})
export class PagamentoPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async processPayment() {
    const alert = await this.alertController.create({
      header: 'Pagamento',
      message: 'Pagamento processado com sucesso!',
      buttons: ['OK']
    });

    await alert.present();
  }

}
