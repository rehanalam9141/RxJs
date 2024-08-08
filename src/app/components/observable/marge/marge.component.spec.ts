import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MargeComponent } from './marge.component';

describe('MargeComponent', () => {
  let component: MargeComponent;
  let fixture: ComponentFixture<MargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
