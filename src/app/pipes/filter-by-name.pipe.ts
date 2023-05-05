import { Pipe, PipeTransform } from '@angular/core';
import {PizzaInterface} from "../services/interface/pizza.interface";

@Pipe({
  name: 'filterByName',

})
export class FilterByNamePipe implements PipeTransform {

  transform(pizzas: PizzaInterface[], value: string ): PizzaInterface[] {

    // @ts-ignore

    return value  ? pizzas?.filter(p => p.name.toLowerCase().includes(value))  : pizzas;
  }
}
