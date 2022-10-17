import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { Block } from "typesafe-web3/dist/lib/model/block";

@Component({
  selector: "app-blocks-panel",
  templateUrl: "./blocks-panel.component.html",
  styleUrls: ["./blocks-panel.component.scss"],
})
export class BlocksPanelComponent implements OnInit {
  blocks: Block[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.blocksSubject.subscribe((success: Block[]) => {
      this.blocks = success.slice(0, 10);
    });
  }

  trackBlock(index: number, block: Block) {
    return block ? block.number : undefined;
  }
}
