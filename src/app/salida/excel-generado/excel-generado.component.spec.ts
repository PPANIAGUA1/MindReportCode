import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelGeneradoComponent } from './excel-generado.component';

describe('ExcelGeneradoComponent', () => {
  let component: ExcelGeneradoComponent;
  let fixture: ComponentFixture<ExcelGeneradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelGeneradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelGeneradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
