import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.page.html',
  styleUrls: ['./servico.page.scss'],
})
export class ServicoPage implements OnInit {
  titulo: string | null | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.titulo = this.route.snapshot.paramMap.get('titulo');
  }

}
