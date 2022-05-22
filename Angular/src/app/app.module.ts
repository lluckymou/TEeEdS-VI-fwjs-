import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabsComponent } from "./tabs.component";
import { TabButtonComponent } from "./tab-button.component";
import { TabAreaComponent } from "./tab-area.component";

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabButtonComponent,
    TabAreaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
