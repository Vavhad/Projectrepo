import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationhotelComponent } from './locationhotel.component';

describe('LocationhotelComponent', () => {
  let component: LocationhotelComponent;
  let fixture: ComponentFixture<LocationhotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationhotelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LocationhotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
