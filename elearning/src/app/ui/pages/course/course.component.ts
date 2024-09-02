import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { SectionHeaderComponent } from "../../components/section-header/section-header.component";
import { CommonModule } from '@angular/common';
import { SectionComponent } from "../../components/section/section.component";
import { Section } from '../../../data/@types/interfaces/section.interface';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [HeaderComponent, SectionHeaderComponent, CommonModule, SectionComponent],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CoursePage {
  sections: Section[] = [
    {
      name: "Váriaveis",
      description: "Aprenda sobre váriaveis",
      id: "",
      linkedLessons: ["1", "2", "3", "4", "5"],
      color: '#D161F8'
    },
    {
      name: "Condicionais",
      description: "Aprenda sobre condicionais",
      id: "",
      linkedLessons: ["1", "2", "3", "4", "5"],
      color: '#6177F8'
    },
    {
      name: "Funções",
      description: "Aprenda sobre funções",
      id: "",
      linkedLessons: ["1", "2", "3", "4", "5"],
      color: '#E54D2E'
    }
  ];

  currentColor: string = this.sections[0].color;
  currentSectionName: string = this.sections[0].name;
  currentSectionNumber: number = 1;

  onSectionInView(index: number) {
    this.currentColor = this.sections[index].color;
    this.currentSectionName = this.sections[index].name;
    this.currentSectionNumber = index + 1;
  }
}
