import { Component, OnInit } from "@angular/core";
import { Block } from "typesafe-web3/dist/lib/model/block";
import { BlockService } from "../../services/block.service";

@Component({
  selector: "app-blocks-panel",
  templateUrl: "./blocks-panel.component.html",
  styleUrls: ["./blocks-panel.component.scss"],
})
export class BlocksPanelComponent implements OnInit {
  blocks: Block[] = [];

  constructor(private blockService: BlockService) {}

  ngOnInit() {
    this.blockService.blocksSubject.subscribe((success: Block[]) => {
      this.blocks = success;
    });
  }

  trackBlock(index: number, block: Block) {
    return block ? block.number : undefined;
  }
}
