import { describe, expect, test } from '@jest/globals';
import { Transaction } from 'typesafe-web3/dist/lib/model/transaction';
import { AkromaService } from './akroma.service';
import { SettingsService } from './settings.service';


describe('Akroma Service', () => {
  let service: AkromaService;


  beforeEach(() => {
    service = new AkromaService(new SettingsService());
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('get block', async () => {
    const web3 = service.getWeb3();
    const blocknum = 8291315;
    const block = await web3.eth.getBlock(blocknum);
    expect(block).toBeTruthy();

    const transactions = block.transactions;

    expect(transactions).toBeTruthy();

    if (transactions) {
      console.debug(`block ${blocknum} has ${transactions.length} transactions`);
      for (const tx of transactions) {
        // console.debug(`tx: ${tx}`);
        const txr = await web3.eth.getTransactionReceipt(tx);
        console.debug(`to: ${JSON.stringify(txr)}`);
        if (txr.to === '0x0') {
          console.debug(`contract creation: ${txr.contractAddress} in block: ${txr.blockNumber}`);
        }

        // console.debug(`txr: ${txr.to}`);
        // console.log(txr.contractAddress);

        // get tx by hash

        // const txByHash = await service.connect().getTransactionByHash(tx.hash);
        // console.debug(`txByHash: ${JSON.stringify(txByHash)}`);
      }
    }
  });
});
