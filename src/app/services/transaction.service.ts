import { Injectable } from '@angular/core';
import { Transaction } from 'typesafe-web3/dist/lib/model/transaction';
import { AkromaService } from './akroma.service';
@Injectable()
export class TransactionService {

    constructor(public akroma: AkromaService) {
    }

    public async getTransaction(hash: string): Promise<Transaction> {
        console.log('called: getTransaction');
        const result = await this.akroma.connect().getTransactionByHash(hash);
        if (result.ok && result.data !== undefined) {
            return result.data;
        }
        return Promise.reject('could not get block');
    }

    public async getTransactionCountByAddress(hash: string): Promise<number> {
        console.log('called: getTransactionCountByAddress');
        const result = await this.akroma.connect().getTransactionCountByAddress(hash);
        console.debug(result);
        if (result.ok && result.data !== undefined) {
            return result.data;
        }
        return Promise.reject('could not get block');
    }



    public async getTransactionsAndBlockByAddress(hash: string, page: number): Promise<Transaction[]> {
        console.log('called: getTransactionsAndBlockByAddress');
        const result = await this.akroma.connect().getTransactionsAndBlockByAddress(hash, page);
        if (result.ok && result.data !== undefined) {
            return result.data;
        }
        return Promise.reject('could not get block');
    }

    public async getTransactionsByAddress(hash: string): Promise<string[]> {
        console.log('called: getTransactionsByAddress');
        const result = await this.akroma.connect().getTransactionsByAddress(hash);
        if (result.ok && result.data !== undefined) {
            return result.data;
        }
        return Promise.reject('could not get transactions');
    }
}
