import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SectionHeaderComponent } from "../../components/section-header/section-header.component";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-course',
  standalone: true,
  imports: [HeaderComponent, SectionHeaderComponent, CommonModule],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CoursePage {

  circles = Array.from({ length: 15 }); // Cria um array com 13 elementos, ajustável

  private leftValues = [0, -40, -70, -40, 0, 40, 70, 40];
  private topValues = [24, 12, 12, 20];

  getCircleStyle(index: number): { [key: string]: string } {
    const leftIndex = index % this.leftValues.length;
    const topIndex = index % this.topValues.length;

    return {
      'left': `${this.leftValues[leftIndex]}px`,
      'margin-top': `${this.topValues[topIndex]}px`
    };
  }

}
