import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { from, Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { Transaction } from 'typesafe-web3/dist/lib/model/transaction';
import { AddressService } from '../../services/address.service';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.component.html',
  styleUrls: ['./address-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddressDetailsComponent implements OnInit {
  currentPage = 4;
  transactions!: string[];
  total$!: Observable<number>;
  pages = 0;
  balance$!: Observable<string>;
  addressTransactions$!: Observable<Transaction[]>;
  address = '';
  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private addressService: AddressService,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.address = params.addressHash;
      this.total$ = from(this.transactionService.getTransactionCountByAddress(params.addressHash));
      this.total$.subscribe(total => {
        console.debug(`total transactions: ${total}`);
        this.pages = Math.ceil(total / 10);
        console.debug(`pages: ${this.pages}`);
        this.balance$ = from(this.addressService.getBalance(this.address));
        this.addressTransactions$ = from(this.apiService.getTransactionsForAddress(this.address, 0));
      })

      // this.transactionService.getTransactionCountByAddress(params.addressHash)
      //   .then(result => {
      //     this.total = result;
      //     this.pages = result / 10;
      //   });
      
    });
  }

  pageChanged(event: PageChangedEvent): void {
    // guard to prevent excess firing
    if (this.currentPage === event.page) {
      return;
    }
    this.currentPage = event.page;
    console.debug(`current page: ${this.currentPage}`);
    this.addressTransactions$ = from(this.apiService.getTransactionsForAddress(this.address, event.page));
  }

  public isFrom(address: string): boolean {
    return this.address.toUpperCase() === address.toUpperCase();
  }
}
