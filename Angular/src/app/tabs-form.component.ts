import { Component, Input } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: "tabs-form",
  template: `<div class="tabs">
  <label for="name">Name: </label>
  <input id="name" type="text" [formControl]="name">
  </div>`
})

export class TabsFormComponent {
  @Input() tabs!: any;

  selected = 0;

  tabClick = (id: number) => {
    this.selected = id === undefined ? 0 : id;
  };
}
