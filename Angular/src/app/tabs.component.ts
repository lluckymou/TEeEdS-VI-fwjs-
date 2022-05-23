import { Component, Input } from "@angular/core";

export interface tab {
  name: string;
  content: string;
}

@Component({
  selector: "app-tabs",
  template: `<div class="tabs">
    <app-tab-button
      *ngFor="let item of tabs; let i = index"
      [id]="i"
      [name]="item.name"
      [selected]="i === selected"
      (onClick)="tabClick(i)"
    >
    </app-tab-button>

    <app-tab-area>
      {{ tabs[selected].content }}
    </app-tab-area>
  </div>`
})
// Eu quero essa linha vazia e o codesandbox remove, então esse comentário é o separador
export class TabsComponent {
  @Input() tabs!: tab[];

  selected = 0;

  tabClick = (id: number) => {
    this.selected = id === undefined ? 0 : id;
  };
}
