import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutasExcelsComponent } from './rutas-excels.component';

describe('RutasExcelsComponent', () => {
  let component: RutasExcelsComponent;
  let fixture: ComponentFixture<RutasExcelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutasExcelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutasExcelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
