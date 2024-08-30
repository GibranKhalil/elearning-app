import { Routes } from '@angular/router';
import { QuestionPage } from './ui/pages/question/question.component';
import { CoursePage } from './ui/pages/course/course.component';
import { CatalogPage } from './ui/pages/catalog/catalog.component';

export const routes: Routes = [
    { path: 'question', component: QuestionPage },
    { path: 'course', component: CoursePage},
    { path: 'catalog', component: CatalogPage }
];
