import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-header.component.html',
  styleUrl: './section-header.component.scss'
})
export class SectionHeaderComponent {
  @Input() sectionNumber: number = 0
  @Input() sectionName: string = ""
  @Input() color: string = "#3498db"

  getBackGroundColor(): { [key: string]: string } {
    return {
      'background-color': `${this.color}`
    };
  }
}
