import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { SectionHeaderComponent } from "../section-header/section-header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'CourseSectionComponent',
  standalone: true,
  imports: [SectionHeaderComponent, CommonModule],
  templateUrl: './section.component.html',
  styleUrl: './section.component.scss'
})
export class SectionComponent {
  @Input() lessons: string[] = [];
  @Input() nextSectionName: string | undefined = "";
  @Input() lessonsPathDirection: number = 1;
  @Input() sectionColor: string = "#3498db"

  @Input() index!: number;
  @Output() sectionInView = new EventEmitter<number>();

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.sectionInView.emit(this.index);
          }
        });
      }, { threshold: 0.5 });
  
      observer.observe(this.elementRef.nativeElement);
    } else {
      // Fallback para navegadores que não suportam IntersectionObserver
      // Por exemplo, chamar diretamente o método de callback ao iniciar
      this.sectionInView.emit(this.index);
    }
  }
  

  private leftValues = [0, -40, -70, -40, 0, 40, 70, 40];
  private topValues = [24, 16, 16, 20];

  getCircleStyle(index: number): { [key: string]: string } {
    const leftIndex = index % this.leftValues.length;
    const topIndex = index % this.topValues.length;

    return {
      'left': `${this.leftValues[leftIndex]*this.lessonsPathDirection}px`,
      'margin-top': `${this.topValues[topIndex]}px`,
      'background-color': `${this.sectionColor}`
    };
  }
}
