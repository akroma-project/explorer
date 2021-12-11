import { Component, OnInit } from "@angular/core";
import { Block } from "typesafe-web3/dist/lib/model/block";
import { Transaction } from "typesafe-web3/dist/lib/model/transaction";
import { BlockService } from "../../services/block.service";

@Component({
  selector: "app-transactions-panel",
  templateUrl: "./transactions-panel.component.html",
  styleUrls: ["./transactions-panel.component.scss"],
})
export class TransactionsPanelComponent implements OnInit {
  blocks: Block[] = [];

  constructor(private blockService: BlockService) {}

  ngOnInit() {
    this.blockService.blocksSubject.subscribe((success: Block[]) => {
      this.blocks = success;
    });
  }

  trackTransaction(index: number, transaction: Transaction) {
    return transaction ? transaction.hash : undefined;
  }
}
