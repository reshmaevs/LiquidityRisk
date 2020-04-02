import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {TabViewModule} from 'primeng/tabview';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LCRViewComponent } from './lcrview/lcrview.component';
import { FlatStructureComponent } from './lcrview/flat-structure/flat-structure.component';
import { TreeStructureComponent } from './lcrview/tree-structure/tree-structure.component';

@NgModule({
  declarations: [
    AppComponent,
    LCRViewComponent,
    FlatStructureComponent,
    TreeStructureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
