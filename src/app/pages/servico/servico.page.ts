import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Servicos } from 'src/app/interfaces/servicos';
import { SERVICOS } from 'src/servicos';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.page.html',
  styleUrls: ['./servico.page.scss'],
})
export class ServicoPage implements OnInit {
  titulo: string | null | undefined;
  servicos = SERVICOS;
  servico: Servicos | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.titulo = this.route.snapshot.paramMap.get('titulo');
    this.servico = SERVICOS.find(h => h.nome === this.titulo)!;
  }

}
