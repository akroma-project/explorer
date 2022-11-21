import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { BlockService } from 'src/app/services/block.service';
import Utils from 'typesafe-web3/dist/lib/utils';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  lookupForm!: UntypedFormGroup;
  modalRef!: BsModalRef;
  connectionUrl: string = "prod";

  constructor(
    private formBuilder: UntypedFormBuilder,
    public router: Router,
    private settings: SettingsService,
    private blocks: BlockService,
  ) {
  }

  ngOnInit() {
    this.lookupForm = this.formBuilder.group({
      lookup: this.formBuilder.control(''),
    });
    const connection = this.settings.getConnectionUrl();
    console.debug(connection);
    this.connectionUrl = connection.indexOf('test') > 0 ? 'test' : 'prod';
  }

  get connectedTo(): string {
    return this.settings.getConnectionUrl();
  }

  onSubmit() {
    const lookupValue = this.lookupForm.value.lookup;
    const lookupType = this.getLookupType(this.lookupForm.value.lookup);

    if (!lookupType) { return; }

    this.router.navigate(['/', lookupType, lookupValue]);
  }

  onUrlChange(url: string){
    this.settings.setConnectionUrl(url);
    this.blocks.blocksSubject.next([]);
    this.blocks.getBlocks();
  }

  private getLookupType(lookupValue: string): string | null {
    if (this.isAddress(lookupValue)) { return 'address'; }
    if (this.isTransaction(lookupValue)) { return 'transaction'; }
    if (this.isBlock(lookupValue)) { return 'block'; }

    return null;
  }

  private isAddress(lookupValue: string): boolean {
    return Utils.isAddress(lookupValue);
  }

  private isTransaction(lookupValue: string): boolean {
    return /^0x?([A-Fa-f0-9]{64})$/.test(lookupValue);
  }

  private isBlock(lookupValue: string): boolean {
    return Number.parseInt(lookupValue, 10).toString(10) === lookupValue;
  }
}
