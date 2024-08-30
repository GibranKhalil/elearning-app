import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'ProgressCard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './progresscard.component.html',
  styleUrl: './progresscard.component.scss'
})
export class ProgressCardComponent {
  @Input() type: "CURSO" | "FORMAÇÂO" = "CURSO"
  @Input() title: string = ""
  @Input() totalItens: number = 0
  @Input() completedItens: number = 0


  getPercentage(){
    if (this.totalItens === 0) {
      return '0%';
    }
    const percentage: number = (this.completedItens * 100) / this.totalItens;
    return `${percentage.toFixed(0)}%`;
  }
}
