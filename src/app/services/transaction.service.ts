import { Injectable } from '@angular/core';
import { Transaction } from 'typesafe-web3/dist/lib/model/transaction';
import { AkromaService } from './akroma.service';

class TransactionCache {
    public transactions: Transaction[] = [];
    public page = 0;
    public age = 0;

}
@Injectable()
export class TransactionService {
    transactionsCache: TransactionCache[] = [];

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
        if (result.ok && result.data !== undefined) {
            return result.data;
        }
        return Promise.reject('could not get block');
    }



    public async getTransactionsAndBlockByAddress(hash: string, page: number): Promise<Transaction[]> {
        const match = this.transactionsCache.filter(x => x.page === page);
        if (match.length === 1 && this.cacheIsNoExpired(match[0])) {
            console.debug(`cache hit for page ${page}`);
            return match[0].transactions;
        }
        console.debug(`cache miss for page ${page}`);
        const result = await this.akroma.connect().getTransactionsAndBlockByAddress(hash, page);
        if (result.ok && result.data !== undefined) {
            this.transactionsCache.push({ transactions: result.data, page, age: new Date().getTime() });
            return result.data;
        }
        return Promise.reject('could not get block');
    }

    private cacheIsNoExpired(cache: TransactionCache): boolean {
        const now = new Date().getTime();
        return now - cache.age < 600000;
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
