import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincuerpoComponent } from './maincuerpo.component';

describe('MaincuerpoComponent', () => {
  let component: MaincuerpoComponent;
  let fixture: ComponentFixture<MaincuerpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaincuerpoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
