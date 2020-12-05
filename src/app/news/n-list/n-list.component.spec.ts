import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NListComponent } from './n-list.component';

describe('NListComponent', () => {
  let component: NListComponent;
  let fixture: ComponentFixture<NListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
