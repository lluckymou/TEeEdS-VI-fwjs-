import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface tabButton {
  id: number;
  name: string;
  selected: boolean;
}

@Component({
  selector: 'tab-button',
  templateUrl: './tab-button.component.html',
  styleUrls: ['./tab-button.component.css'],
})

export class TabButtonComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() selected!: boolean;

  @Output() onClick = new EventEmitter<number>();
}
