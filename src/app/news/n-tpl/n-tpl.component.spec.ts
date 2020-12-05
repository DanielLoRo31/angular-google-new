import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NTplComponent } from './n-tpl.component';

describe('NTplComponent', () => {
  let component: NTplComponent;
  let fixture: ComponentFixture<NTplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NTplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NTplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
