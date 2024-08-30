import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnPathCardComponent } from './learn-path-card.component';

describe('LearnPathCardComponent', () => {
  let component: LearnPathCardComponent;
  let fixture: ComponentFixture<LearnPathCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearnPathCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnPathCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
