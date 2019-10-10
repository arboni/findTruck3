import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCargasComponent } from './edit-cargas.component';

describe('EditCargasComponent', () => {
  let component: EditCargasComponent;
  let fixture: ComponentFixture<EditCargasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditCargasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditCargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
