import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargeMapComponent } from './marge-map.component';

describe('MargeMapComponent', () => {
  let component: MargeMapComponent;
  let fixture: ComponentFixture<MargeMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MargeMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MargeMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
