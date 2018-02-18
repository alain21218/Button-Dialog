import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Dialog } from './dialog';

@Component({
  selector: 'button-dialog',
  templateUrl: './button-dialog.component.html',
  styleUrls: ['./button-dialog.component.css']
})
export class ButtonDialogComponent implements OnInit {

  @Input("model") model:Dialog;
  @Output("confirm") confirm = new EventEmitter<boolean>();
  @Output("cancel") cancel = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }
}
