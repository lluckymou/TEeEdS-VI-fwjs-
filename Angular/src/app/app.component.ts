import { Component } from '@angular/core';
import { tab } from './tabs.component';

@Component({
  selector: 'app-root',
  template: '<app-tabs [tabs]="tabs"></app-tabs>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tabs';

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
}
