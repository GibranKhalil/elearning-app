import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ProgressBar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progressbar.component.html',
  styleUrl: './progressbar.component.scss'
})
export class ProgressbarComponent implements OnChanges {

  @Input() numberOfQuestion: number = 0;
  @Input() currentQuestion: number = 0;
  progressLabel: string = this.getPercentage();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['numberOfQuestion'] || changes['currentQuestion']) {
      this.progressLabel = this.getPercentage();
    }
  }

  getPercentage(): string {
    if (this.numberOfQuestion === 0) {
      return '0%';
    }
    const percentage: number = (this.currentQuestion * 100) / this.numberOfQuestion;
    return `${percentage.toFixed(0)}%`;
  }
}
