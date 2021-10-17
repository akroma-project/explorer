import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BookmarkService } from '../../services/bookmark.service';

@Component({
  selector: 'app-bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.scss']
})
export class BookmarkComponent implements OnInit {
  @Input()
  hash!: string;
  modalRef!: BsModalRef;
  public form: FormGroup;
  constructor(private modalService: BsModalService,
    private fb: FormBuilder,
    private bookmarkService: BookmarkService) {
    this.form = this.fb.group({
      display: [''],
      notes: [''],
      _rev: '',
      _id: this.hash,
    });
  }

  ngOnInit(): void {
    this.bookmarkService.get(this.hash).then(x => {
      this.form = this.fb.group({
        display: [x.display],
        notes: [x.notes],
        _rev: '',
        _id: x._id,
      });
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'akromaModal' });
  }

  public async onSubmit() {
    console.log(this.form);
    this.bookmarkService.save(this.form.value);
    this.modalRef.hide();
  }

}
