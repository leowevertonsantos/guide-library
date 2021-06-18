import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideinvCommonsComponent } from './guideinv-commons.component';

describe('GuideinvCommonsComponent', () => {
  let component: GuideinvCommonsComponent;
  let fixture: ComponentFixture<GuideinvCommonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuideinvCommonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideinvCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
