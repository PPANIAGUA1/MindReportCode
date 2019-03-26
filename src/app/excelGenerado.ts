export class ExcelGenerado {


    issueKey: string;
    hours: number;
    workdate: string;
    incurredDate: string;
    summary: string;
    login: string;
    fullname: string ;
    projectKey: string;
    version: string;
    component: string;
    location: string;
    hoursByUserCalendar: number;
    projectGroup: string;
    month: string;


    constructor(  issueKey: string,
                  hours: number, workdate: string, incurredDate: string, summary: string,
                  login: string, fullname: string , projectKey: string, version: string,
                  component: string, location: string, hoursByUserCalendar: number,
                  projectGroup: string, month: string) {


              this. issueKey =  issueKey ;
              this.hours = hours;
              this.workdate = workdate ;
              this.workdate = incurredDate;
              this.summary = summary;
              this.login = login;
              this.fullname = fullname;
              this.projectKey = projectKey ;
              this.version = version;
              this.component = component;
              this.location = location;
              this.hoursByUserCalendar = hoursByUserCalendar;
              this.projectGroup = projectGroup;
              this.month = month;


    }
}
