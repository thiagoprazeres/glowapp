import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment-timezone';
import { PedidoService } from 'src/app/services/pedido.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {
  agora = moment().tz('America/Recife').format();

  agendamentoForm = this.formBuilder.group({
    data: "",
    hora: ""
  });

  constructor(private formBuilder: FormBuilder, private router: Router, private pedido: PedidoService) {
  }

  ngOnInit() {
    this.agendamentoForm = this.formBuilder.group({
      data: this.agora,
      hora: this.agora
    });
  }

  isSunday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
    return utcDay !== 0;
  };

  agendar() {
    const agendamento = this.agendamentoForm.value;
    this.pedido.setData(agendamento.data!);
    this.pedido.setHora(agendamento.hora!);
    this.router.navigate(['pagamento']);
  }

}
