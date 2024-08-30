import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursePage } from './course.component';


describe('CourseComponent', () => {
  let component: CoursePage;
  let fixture: ComponentFixture<CoursePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
