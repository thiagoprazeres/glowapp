import { Component } from '@angular/core';
import { SERVICOS } from 'src/servicos';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  servicos = SERVICOS;

  constructor() {}

}
