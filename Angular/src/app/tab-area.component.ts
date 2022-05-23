import { Component, Input } from "@angular/core";

@Component({
  selector: "tab-area",
  template: `
    <div class="tab-content">
      {{content}}
    </div>
  `,
  styles: [
    `
      .tab-content {
        margin: 5px;
        border: 1.5px solid #aaa;
        background: #f0f0f0;
        border-radius: 5px;
        font-size: 13pt;
        padding: 20px;
      }
    `
  ]
})
// Eu quero essa linha vazia e o codesandbox remove, então esse comentário é o separador
export class TabAreaComponent {
  @Input() content!: string;
}
