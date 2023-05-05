import { Pipe, PipeTransform } from '@angular/core';
import {PizzaInterface} from "../services/interface/pizza.interface";

@Pipe({
  name: 'filterByTime',

})
export class FilterByTimePipe implements PipeTransform {

  transform(pizzas:PizzaInterface[], value: string | null,  ): PizzaInterface[] {
    return value ? pizzas?.filter(p => p?.orderTime.toLowerCase().includes(value)) : pizzas;
  }

}
