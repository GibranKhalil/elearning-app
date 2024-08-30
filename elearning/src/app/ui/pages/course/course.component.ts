import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SectionHeaderComponent } from "../../components/section-header/section-header.component";

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [HeaderComponent, SectionHeaderComponent],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CoursePage {

}
