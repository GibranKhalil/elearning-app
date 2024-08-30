import { Component, HostListener, ViewChild } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { QuestionComponent } from "../../components/question/question.component";
import { CommonModule } from '@angular/common';
import { ProgressbarComponent } from "../../components/progressbar/progressbar.component";

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [HeaderComponent, QuestionComponent, CommonModule, ProgressbarComponent],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionPage {
  questions = [
    {
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      question: "What is Lorem Ipsum?",
      alternatives: [
        { content: "Lorem Ipsum is simply", id: "A", isCorrect: false },
        { content: "Lorem Ipsum is simply", id: "B", isCorrect: true },
        { content: "Lorem Ipsum is simply", id: "C", isCorrect: false },
        { content: "Lorem Ipsum is simply", id: "D", isCorrect: false },
      ]
    },
    {
      description: "Another dummy text question.",
      question: "What is another dummy text?",
      alternatives: [
        { content: "Option A", id: "A", isCorrect: false },
        { content: "Option B", id: "B", isCorrect: false },
        { content: "Option C", id: "C", isCorrect: true },
        { content: "Option D", id: "D", isCorrect: false },
      ]
    },
    // Adicione mais questões conforme necessário
  ];
  lessonName: string = 'Lição Teste'
  currentQuestionIndex: number = 0;
  isSubmitted: boolean = false;
  buttonLabel: string = "Enviar";

  @ViewChild(QuestionComponent) questionComponent!: QuestionComponent;
  isCorrectAnswer: boolean | null = null;

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;
    const intKey = parseInt(key, 10);
    if (!this.isSubmitted && intKey >= 1 && intKey <= this.questionComponent.alternatives.length) {
      this.questionComponent.selectAlternative(intKey - 1);
    }
    if (this.questionComponent.selectedIndex !== null && key === 'Enter') {
      this.submitOrNext();
    }
  }

  submitOrNext() {
    if (!this.isSubmitted) {
      this.submitQuestion()
    } else {
      this.nextQuestion();
    }
  }

  submitQuestion(){
    this.questionComponent.submitAnswer();
    this.isSubmitted = true;
    this.buttonLabel = "Avançar";
    const selectedAlternative = this.questionComponent.alternatives[this.questionComponent.selectedIndex!];
    this.isCorrectAnswer = selectedAlternative.isCorrect
  }

  nextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.resetQuestion();
    } else {
      alert('Você completou todas as questões!');
    }
  }

  resetQuestion() {
    this.isSubmitted = false;
    this.buttonLabel = "Enviar";
    this.isCorrectAnswer = null;
  }

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }
}
