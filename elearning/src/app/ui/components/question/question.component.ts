import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { QuestionType } from '../../../data/@types/enums/question.enum';

@Component({
  selector: 'QuestionComponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {
  @Input() description: string = '';
  @Input() question: string = '';
  @Input() type: QuestionType = QuestionType.ALTERNATIVE;
  @Input() alternatives: Array<{ content: string, id: string, isCorrect: boolean }> = [];
  @Input() isSubmitted: boolean = false;
  selectedIndex: number | null = null;


  selectAlternative(index: number) {
    if(!this.isSubmitted){
      this.selectedIndex = index;
    }
  }

  playSound(soundPath: string) {
    const audio = new Audio(soundPath);
    audio.play();
  }

  submitAnswer() {
    this.isSubmitted = true;
    const selectedAlternative = this.alternatives[this.selectedIndex!];
    if (selectedAlternative.isCorrect) {
      this.playSound('/correctQuestion.mp3');
    } else {
      this.playSound('/wrongQuestion.mp3');
    }
  }

}
