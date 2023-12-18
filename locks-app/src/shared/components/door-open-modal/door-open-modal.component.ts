import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-door-open-modal',
  templateUrl: './door-open-modal.component.html',
  styleUrls: ['./door-open-modal.component.scss']
})
export class DoorOpenModalComponent {
  constructor( @Inject(MAT_DIALOG_DATA) public doorName: string ) {
  }
}
