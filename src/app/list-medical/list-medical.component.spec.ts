import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMedicalComponent } from './list-medical.component';

describe('ListMedicalComponent', () => {
  let component: ListMedicalComponent;
  let fixture: ComponentFixture<ListMedicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMedicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMedicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
