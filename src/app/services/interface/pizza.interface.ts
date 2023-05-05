export interface PizzaInterface {
  id: number
  name: string
  orderDate: string
  orderTime: string
  toppings: Topping[]
  orderAddress: string
}
export interface Topping {
  type: string
}
