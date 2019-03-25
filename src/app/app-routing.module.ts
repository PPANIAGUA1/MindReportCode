import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { RutasExcelsComponent } from './entrada/rutas-excels/rutas-excels.component';
import { ExcelGeneradoComponent } from './salida/excel-generado/excel-generado.component';



const routes: Routes = [{ path: 'hicham', redirectTo: '/', pathMatch: 'full' },
{ path: '', component: RutasExcelsComponent },
{ path: 'generar', component: ExcelGeneradoComponent }
];

@NgModule({
  declarations: [],
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],

})
export class AppRoutingModule { }
