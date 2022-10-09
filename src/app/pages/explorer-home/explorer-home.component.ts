import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
@Component({
  selector: "app-explorer-home",
  templateUrl: "./explorer-home.component.html",
  styleUrls: ["./explorer-home.component.scss"],
})
export class ExplorerHomeComponent implements OnInit {
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.apiService.loadLatestBlocks();
    this.apiService.loadLatestTransactions();
  }
}
