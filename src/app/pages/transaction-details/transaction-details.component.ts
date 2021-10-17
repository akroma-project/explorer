import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { Transaction } from 'typesafe-web3/dist/lib/model/transaction';
import { TransactionService } from '../../services/transaction.service';


@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrls: ['./transaction-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionDetailsComponent implements OnInit {
  transaction$!: Observable<Transaction>;
  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      // { transactionHash: string; }
      this.transaction$ = from(this.transactionService.getTransaction(params.transactionHash));
    });
  }
}
