import { Observable } from "rxjs";
import { CustomResponse } from "./httpClient.interface";

export interface CrudServiceInterface<T>{
    getAll(): Observable<T[]>;
    getById?(id: string): Observable<T | T[]>;
    post(data: T): CustomResponse<T>
    update(id: string, data: T): CustomResponse<T>
    delete(id: string): CustomResponse<T>
}