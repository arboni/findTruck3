import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceiteTransporteComponent } from './aceite-transporte.component';

describe('AceiteTransporteComponent', () => {
  let component: AceiteTransporteComponent;
  let fixture: ComponentFixture<AceiteTransporteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceiteTransporteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceiteTransporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
