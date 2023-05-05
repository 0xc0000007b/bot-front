import { Pipe, PipeTransform } from '@angular/core';
import {PizzaInterface} from "../services/interface/pizza.interface";

@Pipe({
  name: 'filterByDate',

})
export class FilterByDatePipe implements PipeTransform {

  transform(pizzas:PizzaInterface[], value: string | null | Date,  ): PizzaInterface[] {
    return value ? pizzas?.filter(p => p.orderDate?.toLowerCase().includes(<string>value)) : pizzas;
  }

}
