import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NNewComponent } from './n-new.component';

describe('NNewComponent', () => {
  let component: NNewComponent;
  let fixture: ComponentFixture<NNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
