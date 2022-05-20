import { Component } from "@angular/core";

interface tab {
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
  tabs: tab[] = [
    {
      name: "tab 1",
      content: "Texto do primeiro tab"
    },
    {
      name: "tab 2",
      content: "Texto do segundo tab"
    },
    {
      name: "tab 3",
      content: "Texto do terceiro tab"
    },
    {
      name: "tab 4",
      content: "Texto do quarto tab"
    }
  ];

  selected = 0;

  tabClick = (id: number) => {
    this.selected = id === undefined ? 0 : id;
  };
}
