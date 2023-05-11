import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-confirmar-endereco',
  templateUrl: './confirmar-endereco.page.html',
  styleUrls: ['./confirmar-endereco.page.scss'],
})
export class ConfirmarEnderecoPage implements OnInit {
  safeUrl: SafeResourceUrl | undefined;

  constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer, private pedido: PedidoService) {
  }

  ngOnInit() {
    const endereco = this.route.snapshot.paramMap.get('endereco');
    this.pedido.setEndereco(endereco!);
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.google.com/maps/embed/v1/place?key=AIzaSyD9X5Je9vYPqgyLV8hWs67NQdXhqbHfZEM&q=' + endereco + ', Recife-PE');
  }

}
