import { Component, Input, Output, EventEmitter } from "@angular/core";

export interface tabButton {
  id: number;
  name: string;
  selected: boolean;
}

@Component({
  selector: "app-tab-button",
  template: `<button
    [class]="selected ? 'selected' : ''"
    [name]="name"
    (click)="onClick.emit(id)"
  >
    {{ name }}
  </button> `,
  styles: [
    `
      button {
        margin: 0 5px;
        background: #ccc;
        border-radius: 5px;
        border: 1.5px solid #777;
        padding: 5px 30px;
        font-size: 12pt;
      }
      button.selected {
        font-weight: bold;
        background: #aaa;
      }
    `
  ]
})
// Eu quero essa linha vazia e o codesandbox remove, então esse comentário é o separador
export class TabButtonComponent {
  @Input() id!: number;
  @Input() name!: string;
  @Input() selected!: boolean;

  @Output() onClick = new EventEmitter<number>();
}
