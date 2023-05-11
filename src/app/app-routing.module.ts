import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/bem-vindo/bem-vindo.module').then( m => m.BemVindoPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'servico/:titulo',
    loadChildren: () => import('./pages/servico/servico.module').then( m => m.ServicoPageModule)
  },
  {
    path: 'endereco',
    loadChildren: () => import('./pages/endereco/endereco.module').then( m => m.EnderecoPageModule)
  },
  {
    path: 'confirmar-endereco/:endereco',
    loadChildren: () => import('./pages/confirmar-endereco/confirmar-endereco.module').then( m => m.ConfirmarEnderecoPageModule)
  },
  {
    path: 'agendar',
    loadChildren: () => import('./pages/agendar/agendar.module').then( m => m.AgendarPageModule)
  },
  {
    path: 'pagamento',
    loadChildren: () => import('./pages/pagamento/pagamento.module').then( m => m.PagamentoPageModule)
  },
  {
    path: 'sucesso',
    loadChildren: () => import('./pages/sucesso/sucesso.module').then( m => m.SucessoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
