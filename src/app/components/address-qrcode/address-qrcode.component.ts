import { Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-address-qrcode',
  templateUrl: './address-qrcode.component.html',
  styleUrls: ['./address-qrcode.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddressQrcodeComponent {
  @Input()
  hash!: string;
  elementType: 'url' | 'canvas' | 'img' = 'url';

  modalRef!: BsModalRef;
  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'akromaModal'});
  }
}
