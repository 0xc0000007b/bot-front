import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PizzaInterface} from "./interface/pizza.interface";

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
 private readonly apiUrl: string = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
  getPizzas(): Observable<PizzaInterface[]> {
    return this.http.get<PizzaInterface[]>(this.apiUrl + '/pizzas')
  }
}
