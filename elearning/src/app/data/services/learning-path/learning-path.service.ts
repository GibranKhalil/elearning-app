import { Injectable } from '@angular/core';
import { devBaseUrl } from '../api';
import { HttpClient } from '@angular/common/http';
import { DificultLevel } from '../../@types/enums/dificultLevel.enum';
import { Observable } from 'rxjs';
import { CrudServiceModel } from '../../@types/models/crudService.model';
import { CustomResponse } from '../../@types/interfaces/httpClient.interface';

export interface LearningPathFromAPI{
  _id: string,
  name: string,
  description: string,
  dificultLevel: DificultLevel
}

@Injectable({
  providedIn: 'root'
})
export class LearningPathService extends CrudServiceModel<LearningPathFromAPI> {

  constructor(http: HttpClient) {
    super(devBaseUrl + '/learning-path', http);
  }

  override getAll(): Observable<LearningPathFromAPI[]> {
    return this.http.get<LearningPathFromAPI[]>(this.baseUrl);
  }

}
