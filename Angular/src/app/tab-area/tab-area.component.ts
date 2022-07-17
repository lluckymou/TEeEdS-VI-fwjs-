import { Component, Input } from '@angular/core';

@Component({
  selector: 'tab-area',
  templateUrl: './tab-area.component.html',
  styleUrls: ['./tab-area.component.css'],
})
export class TabAreaComponent {
  @Input() content!: string;
}
