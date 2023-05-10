import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import * as moment from 'moment-timezone';

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

  constructor(private formBuilder: FormBuilder) {
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

}
