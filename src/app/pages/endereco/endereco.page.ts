import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.page.html',
  styleUrls: ['./endereco.page.scss'],
})
export class EnderecoPage implements OnInit {
  public data = [
    'Rua Dom Bosco, 163 - Boa Viagem',
    'Rua Doutor Miguel Vieira Ferreira, 100 - Casa Amarela',
    'Rua Jornalista Rui Maranhão, 132 - Parnamirim',
    'Avenida Norte Miguel Arraes de Alencar, 2251 - Rosarinho',
    'Rua Cônego Barata, 141 - Boa Vista',
    'Rua Doutor Augusto Lins e Silva, 23 - Apipucos',
    'Rua Ribeiro Pessoa, 50 - Madalena',
    'Rua João de Lemos, 85 - Encruzilhada',
    'Avenida Engenheiro Abdias de Carvalho, 455 - Prado',
    'Rua da Hora, 518 - Espinheiro',
  ];
  public results: string[] = [];

  constructor() { }

  ngOnInit() {
  }
  
  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d) => d.toLowerCase().indexOf(query) > -1);
  }

}
