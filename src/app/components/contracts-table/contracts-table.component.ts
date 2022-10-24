import { Component, OnInit } from '@angular/core';
import AkaContract from 'src/app/model/aka.contract';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-contracts-table',
  templateUrl: './contracts-table.component.html',
  styleUrls: ['./contracts-table.component.scss']
})
export class ContractsTableComponent implements OnInit {
  contracts: AkaContract[] = [];
  constructor(
    private api: ApiService,
  ) { }

  ngOnInit() {
    this.api.getLatestContracts().subscribe(x => {
      console.log(x);
      this.contracts = x;
    }, err => { console.error(err) });
  }

}
