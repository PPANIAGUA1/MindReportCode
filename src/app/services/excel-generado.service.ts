
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { ExcelGenerado } from '../excelGenerado';
import { ExcelRuta} from '../excelRuta';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Http, Response  } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class ExcelGeneradoService {
  rutaIssue = 'D:/ppaniaguar/Descargas/report (86).xls';
  rutaWorkLog = 'D:/ppaniaguar/Descargas/report (85).xls';
  private apiUrl = 'http://localhost:8080/api' ;

   init(rutaIssue: string , rutaWorkLog: string) {
    this.rutaIssue = rutaIssue ;
    this.rutaWorkLog = rutaWorkLog;
    console.log(this.rutaIssue);
    console.log(this.rutaWorkLog);
   }
  // excelRuta: ExcelRuta ;
  constructor(private http: Http) {}

  getAll(): Observable<ExcelGenerado[]> {
    return this.http.post(this.apiUrl , new ExcelRuta(this.rutaIssue, this.rutaWorkLog))
     .map((res: Response) => res.json());

 }


//  getAll(): Observable<ExcelGenerado[]> {
//   return this.http.post(this.apiUrl , this.issue, this.workLog)
//    .map((res: Response) => res.json());

// }
}
