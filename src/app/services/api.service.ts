import { Injectable } from "@angular/core";
import { Block } from "typesafe-web3/dist/lib/model/block";
import { AkromaService } from "./akroma.service";
import { uniqBy } from "lodash";
import { BehaviorSubject, Observable, Subject, throwError } from "rxjs";
import { catchError, timeout } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Transaction } from "typesafe-web3/dist/lib/model/transaction";
import AkaContract from "../model/aka.contract";

@Injectable()
export class ApiService {
  blocksSubject = new BehaviorSubject<Block[]>([]);
  transactionsSubject = new BehaviorSubject<Transaction[]>([]);

  constructor(private http: HttpClient) {}

  public loadLatestBlocks(): void {
    this.getLatestBlocks().subscribe((success: Block[]) => {
      this.blocksSubject.next(uniqBy(success, "number"));
    });
  }

  public getLatestContracts(): Observable<AkaContract[]> {
    return this.http
      .get<AkaContract[]>(
        `${environment.api}/contracts?pageNumber=0`
      ).pipe(
        timeout(360000),
        catchError(error => this.handleError('api.get.contracts.latest', error))
      );
  }

  public getLatestBlocks(): Observable<Block[]> {
    return this.http
      .get<Block[]>(
        `${environment.api}/blocks/latest`
      ).pipe(
        timeout(360000),
        catchError(error => this.handleError('api.get.block.latest', error))
      );
  }

  public loadLatestTransactions(): void {
    this.getLatestTransactions().subscribe((success: Transaction[]) => {
      this.transactionsSubject.next(uniqBy(success, "hash"));
    });
  }

  public getLatestTransactions(): Observable<Transaction[]> {
    return this.http
      .get<Transaction[]>(
        `${environment.api}/transactions/latest`
      ).pipe(
        timeout(360000),
        catchError(error => this.handleError('api.get.tx.latest', error))
      );
  }

  public getTransactionsForAddress(address: string, page: number = 0): Observable<Transaction[]> {
    return this.http
      .get<Transaction[]>(
        `${environment.api}/addresses/${address}/transactions/${page}`
      ).pipe(
        timeout(360000),
        catchError(error => this.handleError('api.get.tx.latest', error))
      );
  }

  private handleError(source: string, error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
    }
    return throwError(`${source} failed`);
  }
}
