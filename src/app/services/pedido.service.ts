import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  item = '';
  endereco = '';
  data = '';
  hora = '';

  constructor() { }

  getItem() {
    return this.item;
  }

  setItem(item: string) {
    this.item = item;
  }

  getEndereco() {
    return this.endereco;
  }

  setEndereco(endereco: string) {
    this.endereco = endereco;
  }

  getData() {
    return this.data;
  }

  setData(data: string) {
    this.data = data;
  }

  getHora() {
    return this.hora;
  }

  setHora(hora: string) {
    this.hora = hora;
  }
}
