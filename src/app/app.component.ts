import { Component } from "@angular/core";
import { BlockService } from "./services/block.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  constructor(private blockService: BlockService) {}

  async ngOnInit() {
    await this.blockService.getBlocks();
  }
}
