import { HttpClient } from "@angular/common/http";
import { CrudServiceInterface } from "../interfaces/crudService.interface";
import { Observable } from "rxjs";
import { CustomResponse } from "../interfaces/httpClient.interface";
import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
  })
export abstract class CrudServiceModel<T> implements CrudServiceInterface<T>{
    protected baseUrl: string;
    protected http: HttpClient 
    
    constructor(baseUrl: string, http: HttpClient){
        this.baseUrl = baseUrl;
        this.http = http
    }
    getAll(): Observable<T[]> {
        throw new Error("Method not implemented.");
    }
    getById?(id: string): Observable<T | T[]> {
        throw new Error("Method not implemented.");
    }
    post(data: T): CustomResponse<T> {
        throw new Error("Method not implemented.");
    }
    update(id: string, data: T): CustomResponse<T> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): CustomResponse<T> {
        throw new Error("Method not implemented.");
    }

}