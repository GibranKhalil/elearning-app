import { LearningPathService, LearningPathFromAPI } from './../../../data/services/learning-path/learning-path.service';
import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { ProgressCardComponent } from "../../components/progresscard/progresscard.component";

@Component({
  selector: 'CatalogPage',
  standalone: true,
  imports: [HeaderComponent, ProgressCardComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogPage implements OnInit {
  data: LearningPathFromAPI[] = [];
  constructor(private apiService: LearningPathService) { }

  ngOnInit(): void {
    this.apiService.getAll().subscribe(response => {
      this.data = response
    }, error => {
      console.error('Erro ao fazer a chamada à API', error);
    });
  }
  
}
