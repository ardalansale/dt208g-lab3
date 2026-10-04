import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Konvertera } from './konvertera';

describe('Konvertera', () => {
  let component: Konvertera;
  let fixture: ComponentFixture<Konvertera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Konvertera]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Konvertera);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
