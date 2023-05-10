import { Component, OnInit } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';


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

  constructor() { }

  ngOnInit() {
  }

}
