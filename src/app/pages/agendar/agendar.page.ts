import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment-timezone';
const agora = moment().tz('America/Recife').format();

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {

  agendamentoForm = this.formBuilder.group({
    data: "2023-05-09",
    hora: "03:30"
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    // this.agendamentoForm = this.formBuilder.group({
    //   data: agora,
    //   hora: agora
    // });
  }

  confirmar() {
    console.log(this.agendamentoForm.value);
  }

}
