import { Component, Input } from "@angular/core";

@Component({
  selector: "tabs",
  template: `<div class="tabs">
    <tab-button
      *ngFor="let item of tabs; let i = index"
      [id]="i"
      [name]="item.name"
      [selected]="i === selected"
      (onClick)="tabClick(i)"
    >
    </tab-button>

    <tab-area [content]="tabs[selected].content">
    </tab-area>
  </div>`
})

export class TabsComponent {
  @Input() tabs!: any;

  selected = 0;

  tabClick = (id: number) => {
    this.selected = id === undefined ? 0 : id;
  };
}
