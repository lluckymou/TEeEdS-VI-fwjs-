import { Component, Input } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  @Input() tabs!: any;

  selected = 0;

  tabClick = (id: number) => {
    this.selected = id === undefined ? 0 : id;
  };
}
