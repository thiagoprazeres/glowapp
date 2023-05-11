import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BemVindoPageRoutingModule } from './bem-vindo-routing.module';

import { BemVindoPage } from './bem-vindo.page';

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
    BemVindoPageRoutingModule,
    LottieModule.forRoot({ player: playerFactory })
  ],
  declarations: [BemVindoPage]
})
export class BemVindoPageModule {}
