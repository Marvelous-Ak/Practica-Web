import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NablogComponent } from './nablog.component';

describe('NablogComponent', () => {
  let component: NablogComponent;
  let fixture: ComponentFixture<NablogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NablogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NablogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
