import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {ExcelService} from './services/excel.service';
import {ExcelGeneradoService} from './services/excel-generado.service';
import {HttpModule} from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RutasExcelsComponent } from './entrada/rutas-excels/rutas-excels.component';
import { ExcelGeneradoComponent } from './salida/excel-generado/excel-generado.component';
import { AppRoutingModule } from './app-routing.module';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RutasExcelsComponent,
    ExcelGeneradoComponent,
    FilterPipe

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, HttpModule, FormsModule
  ],
  providers: [ExcelService, ExcelGeneradoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
