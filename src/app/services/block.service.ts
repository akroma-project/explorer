import { Injectable } from "@angular/core";
import { Block } from "typesafe-web3/dist/lib/model/block";
import { AkromaService } from "./akroma.service";
import _ from "lodash";
@Injectable()
export class BlockService {
  constructor(private akroma: AkromaService) {}

  public async getBlocks(): Promise<Block[]> {
    console.log("called: getBlocks");
    const blocks: Block[] = [];
    const latest = await this.akroma.connect().getBlockByNumber("latest", true);
    if (latest.data !== undefined && latest.data.number !== undefined) {
      blocks.push(latest.data);
      const stop = latest.data.number - 10;
      for (let index = latest.data.number; index > stop; index--) {
        const next = await this.akroma.connect().getBlockByNumber(index, true);
        if (next.data !== undefined) {
          blocks.push(next.data);
        }
      }
    }
    const unique = _.uniqBy(blocks, (x) => x.number);
    return unique;
  }

  public async getBlock(numberOrHash: string): Promise<Block> {
    console.log("called: getBlock");
    const result =
      this.isHash(numberOrHash) === true
        ? await this.akroma.connect().getBlockByHash(numberOrHash)
        : await this.akroma
            .connect()
            .getBlockByNumber(parseInt(numberOrHash, 10));
    if (result.ok && result.data !== undefined) {
      return result.data;
    }
    return Promise.reject("could not get block");
  }

  private isHash(lookupValue: string): boolean {
    return /^0x?([A-Fa-f0-9]{64})$/.test(lookupValue);
  }
}
