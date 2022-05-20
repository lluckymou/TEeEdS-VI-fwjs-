import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
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
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
// Eu quero essa linha vazia e o codesandbox remove, então esse comentário é o separador
export class AppModule {}
