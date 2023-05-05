import { Pipe, PipeTransform } from '@angular/core';
import {PizzaInterface} from "../services/interface/pizza.interface";

@Pipe({
  name: 'findByAddress'
})
export class FindByAddressPipe implements PipeTransform {

  transform(pizzas: PizzaInterface[], address: string): PizzaInterface[] {
    return address ? pizzas.filter((pizza: PizzaInterface) => pizza.orderAddress.includes(address)) : pizzas;
  }

}
