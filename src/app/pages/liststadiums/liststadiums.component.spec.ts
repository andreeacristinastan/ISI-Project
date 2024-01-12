import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListstadiumsComponent } from './liststadiums.component';

describe('ListstadiumsComponent', () => {
  let component: ListstadiumsComponent;
  let fixture: ComponentFixture<ListstadiumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListstadiumsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListstadiumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
