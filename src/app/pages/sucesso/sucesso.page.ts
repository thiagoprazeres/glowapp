import { Component, OnInit } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { Servicos } from 'src/app/interfaces/servicos';
import { PedidoService } from 'src/app/services/pedido.service';
import { SERVICOS } from 'src/servicos';


@Component({
  selector: 'app-sucesso',
  templateUrl: './sucesso.page.html',
  styleUrls: ['./sucesso.page.scss'],
})
export class SucessoPage implements OnInit {
  options: AnimationOptions = {
    path: 'https://assets7.lottiefiles.com/packages/lf20_eSr9cajwxS.json',
    loop: false
  };
  titulo: string | null | undefined;
  servicos = SERVICOS;
  servico: Servicos | undefined;
  endereco = '';
  data = '';
  hora = '';

  constructor(private pedido: PedidoService) {
    this.titulo = this.pedido.getItem();;
    this.endereco = this.pedido.getEndereco();
    this.data = this.pedido.getData();
    this.hora = this.pedido.getHora();
    this.servico = SERVICOS.find(h => h.nome === this.titulo)!;
  }

  ngOnInit() {
  }

}
