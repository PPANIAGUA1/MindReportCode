import { Http } from '@angular/http';
import { RutasExcelsComponent } from './../../entrada/rutas-excels/rutas-excels.component';
import { ExcelRuta } from './../../excelRuta';
import { ExcelGenerado } from './../../excelGenerado';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ExcelService} from '../../services/excel.service';
import {ExcelGeneradoService} from '../../services/excel-generado.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-excel-generado',
  templateUrl: './excel-generado.component.html',
  styleUrls: ['./excel-generado.component.css']
})
export class ExcelGeneradoComponent implements OnInit    {

  private data: ExcelGenerado[];

  constructor(private http: Http, private excelGenerdoService: ExcelGeneradoService ,
              private location: Location, private excelService: ExcelService) { }

ngOnInit() {
  this.getAllExcel();
  }
 getAllExcel() {
    this.excelGenerdoService.getAll().subscribe(
    data => {
     this.data = data ;
     console.log(this.data);

        },
 err => {
   console.log(err);

}
   );
 }

   // console.log(this.issue);
// tslint:disable-next-line:max-line-length
  // const req = this.http.post('http://localhost:8080/api', new ExcelRuta('D:\hbenchaoui\Documentos\pruebasAng\report (86).xls', 'D:\hbenchaoui\Documentos\pruebasAng\report (85).xls'))

  //  .subscribe(
  //          res => {
  //               console.log(res);
  //          },
  //             err => {
  //                console.log('Error occured');
  //           }
  //         );
  //     }



// filterPost = '' ;

  // data: any = [{

  //   IssueKey: '1',
  //   Hours: 9,
  //   WorkDate: '2019-03-19T14:27:11.068+0000',
  //   IncurredDate: '2019-03-19T14:27:11.068+0000',
  //   Summary: 'NEGOCIA_System_Tests_Inclusion de tooltip',
  //   Login: 'aacornejo',
  //   FullName: 'aacornejo0000',
  //   ProjectKey: 'SIOPMN',
  //   Version: 'SIOPMN_Backlog_Evolutivo,SIOPMN_Base_Evolutivo',
  //   Component: 'ASEGURA',
  //   Location: 'Malaga',
  //   HoursByUserCalendar: 0,
  //   ProjectGroup: 'SIOPMN',
  //   Month: 'mar.-19'
  // },
  // {

  //   IssueKey: '2',
  //   Hours: 9,
  //   WorkDate: '2019-03-19T14:27:11.068+0000',
  //   IncurredDate: '2019-03-19T14:27:11.068+0000',
  //   Summary: 'NEGOCIA_System_Tests_InclusiÃ³n de tooltip',
  //   Login: 'aacornejo',
  //   FullName: 'aacornejo0000',
  //   ProjectKey: 'SIOPMN',
  //   Version: 'SIOPMN_Backlog_Evolutivo,SIOPMN_Base_Evolutivo',
  //   Component: 'ASEGURA',
  //   Location: 'Malaga',
  //   HoursByUserCalendar: 0,
  //   ProjectGroup: 'SIOPMN',
  //   Month: 'mar.-19'
  // },
  // {

  //   IssueKey: '2',
  //   Hours: 9,
  //   WorkDate: '2019-03-19T14:27:11.068+0000',
  //   IncurredDate: '2019-03-19T14:27:11.068+0000',
  //   Summary: 'NEGOCIA_System_Tests_InclusiÃ³n de tooltip',
  //   Login: 'aacornejo',
  //   FullName: 'aacornejo0000',
  //   ProjectKey: 'SIOPMN',
  //   Version: 'SIOPMN_Backlog_Evolutivo,SIOPMN_Base_Evolutivo',
  //   Component: 'ASEGURA',
  //   Location: 'Malaga',
  //   HoursByUserCalendar: 0,
  //   ProjectGroup: 'SIOPMN',
  //   Month: 'mar.-19'
  // },
  // {

  //   IssueKey: '3',
  //   Hours: 9,
  //   WorkDate: '2019-03-19T14:27:11.068+0000',
  //   IncurredDate: '2019-03-19T14:27:11.068+0000',
  //   Summary: 'NEGOCIA_System_Tests_InclusiÃ³n de tooltip',
  //   Login: 'aacornejo',
  //   FullName: 'aacornejo0000',
  //   ProjectKey: 'SIOPMN',
  //   Version: 'SIOPMN_Backlog_Evolutivo,SIOPMN_Base_Evolutivo',
  //   Component: 'ASEGURA',
  //   Location: 'Malaga',
  //   HoursByUserCalendar: 0,
  //   ProjectGroup: 'SIOPMN',
  //   Month: 'mar.-19'
  // },
  // {

  //   IssueKey: '3',
  //   Hours: 9,
  //   WorkDate: '2019-03-19T14:27:11.068+0000',
  //   IncurredDate: '2019-03-19T14:27:11.068+0000',
  //   Summary: 'NEGOCIA_System_Tests_InclusiÃ³n de tooltip',
  //   Login: 'aacornejo',
  //   FullName: 'aacornejo0000',
  //   ProjectKey: 'SIOPMN',
  //   Version: 'SIOPMN_Backlog_Evolutivo,SIOPMN_Base_Evolutivo',
  //   Component: 'ASEGURA',
  //   Location: 'Malaga',
  //   HoursByUserCalendar: 0,
  //   ProjectGroup: 'SIOPMN',
  //   Month: 'mar.-19'
  // },
  // {

  //   IssueKey: '3',
  //   Hours: 9,
  //   WorkDate: '2019-03-19T14:27:11.068+0000',
  //   IncurredDate: '2019-03-19T14:27:11.068+0000',
  //   Summary: 'NEGOCIA_System_Tests_InclusiÃ³n de tooltip',
  //   Login: 'aacornejo',
  //   FullName: 'aacornejo0000',
  //   ProjectKey: 'SIOPMN',
  //   Version: 'SIOPMN_Backlog_Evolutivo,SIOPMN_Base_Evolutivo',
  //   Component: 'ASEGURA',
  //   Location: 'Malaga',
  //   HoursByUserCalendar: 0,
  //   ProjectGroup: 'SIOPMN',
  //   Month: 'mar.-19'
  // },
  // {

  //   IssueKey: '3',
  //   Hours: 9,
  //   WorkDate: '2019-03-19T14:27:11.068+0000',
  //   IncurredDate: '2019-03-19T14:27:11.068+0000',
  //   Summary: 'NEGOCIA_System_Tests_InclusiÃ³n de tooltip',
  //   Login: 'aacornejo',
  //   FullName: 'aacornejo0000',
  //   ProjectKey: 'SIOPMN',
  //   Version: 'SIOPMN_Backlog_Evolutivo,SIOPMN_Base_Evolutivo',
  //   Component: 'ASEGURA',
  //   Location: 'Malaga',
  //   HoursByUserCalendar: 0,
  //   ProjectGroup: 'SIOPMN',
  //   Month: 'mar.-19'
  // },
  // {

  //   IssueKey: '4',
  //   Hours: 9,
  //   WorkDate: '2019-03-19T14:27:11.068+0000',
  //   IncurredDate: '2019-03-19T14:27:11.068+0000',
  //   Summary: 'NEGOCIA_System_Tests_InclusiÃ³n de tooltip',
  //   Login: 'aacornejo',
  //   FullName: 'aacornejo0000',
  //   ProjectKey: 'SIOPMN',
  //   Version: 'SIOPMN_Backlog_Evolutivo,SIOPMN_Base_Evolutivo',
  //   Component: 'ASEGURA',
  //   Location: 'Malaga',
  //   HoursByUserCalendar: 0,
  //   ProjectGroup: 'SIOPMN',
  //   Month: 'mar.-19'
  // },
  // {

  //   IssueKey: '5',
  //   Hours: 9,
  //   WorkDate: '2019-03-19T14:27:11.068+0000',
  //   IncurredDate: '2019-03-19T14:27:11.068+0000',
  //   Summary: 'NEGOCIA_System_Tests_InclusiÃ³n de tooltip',
  //   Login: 'aacornejo',
  //   FullName: 'aacornejo0000',
  //   ProjectKey: 'SIOPMN',
  //   Version: 'SIOPMN_Backlog_Evolutivo,SIOPMN_Base_Evolutivo',
  //   Component: 'ASEGURA',
  //   Location: 'Malaga',
  //   HoursByUserCalendar: 0,
  //   ProjectGroup: 'SIOPMN',
  //   Month: 'mar.-19'
  // },
  // {

  //   IssueKey: '5',
  //   Hours: 9,
  //   WorkDate: '2019-03-19T14:27:11.068+0000',
  //   IncurredDate: '2019-03-19T14:27:11.068+0000',
  //   Summary: 'NEGOCIA_System_Tests_InclusiÃ³n de tooltip',
  //   Login: 'aacornejo',
  //   FullName: 'aacornejo0000',
  //   ProjectKey: 'SIOPMN',
  //   Version: 'SIOPMN_Backlog_Evolutivo,SIOPMN_Base_Evolutivo',
  //   Component: 'ASEGURA',
  //   Location: 'Malaga',
  //   HoursByUserCalendar: 0,
  //   ProjectGroup: 'SIOPMN',
  //   Month: 'mar.-19'
  // },
  // {

  //   IssueKey: '6',
  //   Hours: 9,
  //   WorkDate: '2019-03-19T14:27:11.068+0000',
  //   IncurredDate: '2019-03-19T14:27:11.068+0000',
  //   Summary: 'NEGOCIA_System_Tests_InclusiÃ³n de tooltip',
  //   Login: 'aacornejo',
  //   FullName: 'aacornejo0000',
  //   ProjectKey: 'SIOPMN',
  //   Version: 'SIOPMN_Backlog_Evolutivo,SIOPMN_Base_Evolutivo',
  //   Component: 'ASEGURA',
  //   Location: 'Malaga',
  //   HoursByUserCalendar: 0,
  //   ProjectGroup: 'SIOPMN',
  //   Month: 'mar.-19'
  // },
  // {

  //   IssueKey: '7',
  //   Hours: 9,
  //   WorkDate: '2019-03-19T14:27:11.068+0000',
  //   IncurredDate: '2019-03-19T14:27:11.068+0000',
  //   Summary: 'NEGOCIA_System_Tests_InclusiÃ³n de tooltip',
  //   Login: 'aacornejo',
  //   FullName: 'aacornejo0000',
  //   ProjectKey: 'SIOPMN',
  //   Version: 'SIOPMN_Backlog_Evolutivo,SIOPMN_Base_Evolutivo',
  //   Component: 'ASEGURA',
  //   Location: 'Malaga',
  //   HoursByUserCalendar: 0,
  //   ProjectGroup: 'SIOPMN',
  //   Month: 'mar.-19'
  // },
  // {

  //   IssueKey: '8',
  //   Hours: 9,
  //   WorkDate: '2019-03-19T14:27:11.068+0000',
  //   IncurredDate: '2019-03-19T14:27:11.068+0000',
  //   Summary: 'NEGOCIA_System_Tests_InclusiÃ³n de tooltip',
  //   Login: 'aacornejo',
  //   FullName: 'aacornejo0000',
  //   ProjectKey: 'SIOPMN',
  //   Version: 'SIOPMN_Backlog_Evolutivo,SIOPMN_Base_Evolutivo',
  //   Component: 'ASEGURA',
  //   Location: 'Malaga',
  //   HoursByUserCalendar: 0,
  //   ProjectGroup: 'SIOPMN',
  //   Month: 'mar.-19'
  // }
  // ];

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.data, 'libro');
  }

   goBack(): void {
     this.location.back();
  }




}
