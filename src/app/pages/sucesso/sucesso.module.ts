import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SucessoPageRoutingModule } from './sucesso-routing.module';

import { SucessoPage } from './sucesso.page';

// Add these two
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

// Export this function
export function playerFactory(): any {
  return import('lottie-web');
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SucessoPageRoutingModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  declarations: [SucessoPage]
})
export class SucessoPageModule {}
