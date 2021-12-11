import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from, Observable } from 'rxjs';
import { Block } from 'typesafe-web3/dist/lib/model/block';
import { BlockService } from '../../services/block.service';


@Component({
  selector: 'app-block-details',
  templateUrl: './block-details.component.html',
  styleUrls: ['./block-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlockDetailsComponent implements OnInit {
  block$!: Observable<Block>;

  constructor(
    private route: ActivatedRoute,
    private blockService: BlockService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.block$ = from(this.blockService.getBlock(params.blockId));
    });
  }
}
