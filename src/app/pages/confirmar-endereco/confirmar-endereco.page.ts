import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmar-endereco',
  templateUrl: './confirmar-endereco.page.html',
  styleUrls: ['./confirmar-endereco.page.scss'],
})
export class ConfirmarEnderecoPage implements OnInit {
  endereco: string | null | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.endereco = this.route.snapshot.paramMap.get('endereco');
  }
  
}
