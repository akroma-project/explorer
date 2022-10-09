import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Transaction } from "typesafe-web3/dist/lib/model/transaction";

@Component({
  selector: "app-transactions-panel",
  templateUrl: "./transactions-panel.component.html",
  styleUrls: ["./transactions-panel.component.scss"],
})
export class TransactionsPanelComponent implements OnInit {
  transactions: Transaction[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.transactionsSubject.subscribe((success: Transaction[]) => {
      this.transactions = success;
    });
  }

  trackTransaction(index: number, transaction: Transaction) {
    return transaction ? transaction.hash : undefined;
  }
}
