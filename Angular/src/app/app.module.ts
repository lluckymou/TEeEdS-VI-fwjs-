import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabButtonComponent } from './tab-button/tab-button.component';
import { TabAreaComponent } from './tab-area/tab-area.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    TabButtonComponent,
    TabAreaComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
