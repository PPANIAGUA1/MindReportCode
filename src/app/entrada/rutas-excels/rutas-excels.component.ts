import { ExcelGeneradoService } from './../../services/excel-generado.service';
import { ExcelGenerado } from './../../excelGenerado';
import { Component } from '@angular/core';

import { ExcelRuta } from './../../excelRuta';


@Component({
  selector: 'app-rutas-excels',
  templateUrl: './rutas-excels.component.html',
  styleUrls: ['./rutas-excels.component.css']
})
export class RutasExcelsComponent {
  constructor(private excelGeneradoService: ExcelGeneradoService) {}
res: ExcelGenerado[];

   issue: string ;
  workLog: string ;
 excelRuta: ExcelRuta;

  onFileSelectedIssue(event): void {
     this.issue  = event.target.value.replace(/\\/g, '/');
     console.log(this.issue);
}



  onFileSelectedWorkLog(event): void {
   this.workLog = event.target.value.replace(/\\/g, '/');
   console.log(this.workLog);
}

    onUpload() {
    // this.excelGeneradoService.init(this.issue, this.workLog );
  }

}
