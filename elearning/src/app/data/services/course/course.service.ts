import { Injectable } from '@angular/core';
import { DificultLevel } from '../../@types/enums/dificultLevel.enum';
import { CrudServiceModel } from '../../@types/models/crudService.model';
import { HttpClient } from '@angular/common/http';
import { devBaseUrl } from '../api';
import { Observable } from 'rxjs';


export interface CourseFromAPI{
  name: string,
  description: string,
  dificultLevel: DificultLevel,
  id: string,
  linkedSection: string[]
}

@Injectable({
  providedIn: 'root'
})
export class CourseService extends CrudServiceModel<CourseFromAPI>  {

  constructor(http: HttpClient){
    super(`${devBaseUrl}/course`, http)
  }

  override getAll(): Observable<CourseFromAPI[]> {
    return this.http.get<CourseFromAPI[]>(this.baseUrl)
  }

}
