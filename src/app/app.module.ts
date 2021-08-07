import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AgGridModule } from 'ag-grid-angular';
import { ButtonRendererComponent } from './renderer/button-renderer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgSelectModule,
    AgGridModule.withComponents([ButtonRendererComponent])
  ],
  declarations: [AppComponent, HelloComponent,ButtonRendererComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
