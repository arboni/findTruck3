import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCargasComponent } from './list-cargas.component';

describe('ListCargasComponent', () => {
  let component: ListCargasComponent;
  let fixture: ComponentFixture<ListCargasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCargasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
