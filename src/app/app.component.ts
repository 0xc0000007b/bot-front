import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {PizzaService} from "./services/pizza.service";
import {PizzaInterface} from "./services/interface/pizza.interface";

import {animate, state, style, transition, trigger} from "@angular/animations";

import {FormControl, FormGroup} from "@angular/forms";
import { DatePipe} from "@angular/common";
import {Subject, takeUntil} from "rxjs";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('drop', [
      state('opened', style({ marginTop: 0, height: '170px', visibility: 'visible'}),),
      state('closed', style({  visibility: 'hidden', height: 0,})),
      transition('closed<=>opened', animate(250))
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy{
  private unsubscribe$: Subject<void> = new Subject<void>();
  title: string = 'bot-front';
  pizzas!: PizzaInterface[]
  search!: string
  filterType: string = 'date';
  setFilterType() {
    this.filterType = this.filterType == 'date' ? 'time' : 'date'
  }
  form: FormGroup = new FormGroup<any>({
    time: new FormControl('')
  })

  dateField: string | null = null
  timeField: string | null = null
  convertedDate!: string | null
  constructor(private readonly pizzaService: PizzaService, private datePipe: DatePipe) {
    this.convertedDate = this.datePipe.transform(this.dateField, 'dd.MM.yyyy')
  }

  /**
   * animation block
   */

  allSorting: string = 'closed'
  openCloseAll(): void {
    this.allSorting = this.allSorting == 'closed' ? 'opened' : 'closed'
    if (this.allSorting == 'closed') {
      this.closeAll()
    }
  }

  margaritaAnimationTrigger: string = 'closed'
  openCloseMargarita(): void {
    this.margaritaAnimationTrigger = this.margaritaAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }

  dateControl: FormControl = new FormControl();
  pepperoniAnimationTrigger: string = 'closed'
  openClosePepperoni() {
    this.pepperoniAnimationTrigger = this.pepperoniAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }

  pineappleAnimationTrigger: string = 'closed'
  openClosePineapple() {
    this.pineappleAnimationTrigger = this.pineappleAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  marinaraAnimationTrigger: string = 'closed'
  openCloseMarinara() {
    this.marinaraAnimationTrigger = this.marinaraAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  sicilianAnimationTrigger: string = 'closed'
  openCloseSicilian() {
    this.sicilianAnimationTrigger = this.sicilianAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  meatAnimationTrigger: string = 'closed'
  openCloseMeat() {
    this.meatAnimationTrigger = this.meatAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  cheeseAnimationTrigger: string = 'closed'
  openCloseCheese(): void {
    this.cheeseAnimationTrigger = this.cheeseAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  seasonsAnimationTrigger: string = 'closed'
  openCloseSeasons(): void {
    this.seasonsAnimationTrigger = this.seasonsAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  diabloAnimationTrigger: string = 'closed'
  openCloseDiablo(): void {
    this.diabloAnimationTrigger = this.diabloAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  mimosaAnimationTrigger: string = 'closed'
  openCloseMimosa(): void {
    this.mimosaAnimationTrigger = this.mimosaAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  capreseAnimationTrigger: string = 'closed'
  openCloseCaprese(): void {
    this.capreseAnimationTrigger = this.capreseAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  californianAnimationTrigger: string = 'closed'
  openCloseCalifornian() {
    this.californianAnimationTrigger = this.californianAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  yorkAnimationTrigger: string = 'closed'
  openCloseYork(): void {
    this.yorkAnimationTrigger = this.yorkAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  papayaAnimationTrigger: string = 'closed'
  openClosePapaya(): void {
    this.papayaAnimationTrigger = this.papayaAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  midSeaAnimationTrigger: string = 'closed'
  openCloseMidSea(): void {
    this.midSeaAnimationTrigger = this.midSeaAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  cozzeAnimationTrigger: string = 'closed'
  openCloseCozze(): void {
    this.cozzeAnimationTrigger = this.cozzeAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  vegSeaAnimationTrigger: string = 'closed'
  openCloseVeg(): void {
    this.vegSeaAnimationTrigger = this.vegSeaAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  primaAnimationTrigger: string = 'closed'
  openClosePrima(): void {
    this.primaAnimationTrigger = this.primaAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
 tirolianAnimationTrigger: string = 'closed'
  openCloseTirolian(): void {
    this.tirolianAnimationTrigger = this.tirolianAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  valtellinaAnimationTrigger: string = 'closed'
  openCloseValtellina(): void {
    this.valtellinaAnimationTrigger = this.valtellinaAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  americanaAnimationTrigger: string = 'closed'
  openCloseAmericana(): void {
    this.americanaAnimationTrigger = this.americanaAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  ownPizzasAnimationTrigger: string = 'closed'
  openCloseOwnPizzas(): void {
    this.ownPizzasAnimationTrigger = this.ownPizzasAnimationTrigger == 'closed' ? 'opened' : 'closed'
  }
  /**
   * end of animation block
   */


  /**
   * pizza arrays sorting block
   */
  mgPizzas!: PizzaInterface[]
 pepPizzas!: PizzaInterface[]
 pineapplePizzas!: PizzaInterface[]
  diabloPizzas!: PizzaInterface[]
  meatPizzas!: PizzaInterface[]
  seasonsPizzas!: PizzaInterface[]
  sicilianPizzas!: PizzaInterface[]
  marinaraPizzas!: PizzaInterface[]
  mimosaPizzas!: PizzaInterface[]
  papayaPizzas!: PizzaInterface[]
  vegetarianPizzas!: PizzaInterface[]
  capresePizzas!: PizzaInterface[]
  primaveraPizzas!: PizzaInterface[]
  californianPizzas!: PizzaInterface[]
  midSeaPizzas!: PizzaInterface[]
  americanaPizzas!: PizzaInterface[]
  conLeKoccePizzas!: PizzaInterface[]
  valtellinaPizzas!: PizzaInterface[]
  tirolianPizzas!: PizzaInterface[]
  newYorkishPizzas!: PizzaInterface[]
  cheesePizzas!: PizzaInterface[]
  ownPizzas!: PizzaInterface[]
  address!: string;

  ngOnInit(): void {
    this.pizzaService.getPizzas().subscribe(res => {
     this.extractSimplePizzas(res)
      this.pizzas  = res
    })
    this.dateControl.valueChanges
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((date: Date) => {
        const formattedDate = this.datePipe.transform(date, 'dd.MM.yyyy');
        this.dateField = formattedDate
      });
    this.form.controls['time'].valueChanges.pipe(takeUntil(this.unsubscribe$)).subscribe((date: Date) => {
      const formattedTime = this.datePipe.transform(date,'HH:mm:ss')
      this.timeField = formattedTime
      console.log(formattedTime)
      console.log(this.timeField)
    })
  }



  private extractSimplePizzas(pizzas: PizzaInterface[]) {
    this.mgPizzas = pizzas?.filter(p => p.name.toLowerCase() === 'маргарита')
    this.pepPizzas = pizzas?.filter(p => p.name.toLowerCase() === 'пепперони')
    this.pineapplePizzas = pizzas?.filter(p => p.name.toLowerCase() === 'ананасовая')
    this.diabloPizzas = pizzas?.filter(p => p.name.toLowerCase() === 'diablo')
    this.meatPizzas = pizzas?.filter(p => p.name.toLowerCase() === '4 мяса')
    this.tirolianPizzas = pizzas?.filter(p => p.name.toLowerCase() === 'тирольская')
    this.valtellinaPizzas = pizzas?.filter(p => p.name.toLowerCase() === 'вальтеллина')
    this.newYorkishPizzas = pizzas?.filter(p => p.name.toLowerCase() === 'нью-йоркская')
    this.americanaPizzas = pizzas?.filter(p => p.name.toLowerCase() === 'американа')
    this.conLeKoccePizzas = pizzas?.filter(p => p.name.toLowerCase() === 'Com le Cozze')
    this.midSeaPizzas = pizzas?.filter(p => p.name.toLowerCase() === 'средиземнморская')
    this.californianPizzas = pizzas?.filter(p => p.name.toLowerCase() === 'калифорнийская')
    this.marinaraPizzas = pizzas?.filter(p => p.name.toLowerCase() === 'маринара')
    this.capresePizzas = pizzas?.filter(p => p.name.toLowerCase() === 'капрезе')
    this.vegetarianPizzas = pizzas?.filter(p => p.name.toLowerCase() === 'вегетарианская')
    this.seasonsPizzas = pizzas?.filter(p => p.name.toLowerCase() === '4 сезона')
    this.sicilianPizzas = pizzas?.filter(p => p.name.toLowerCase() === 'сицилийская')
    this.mimosaPizzas = pizzas?.filter(p => p.name.toLowerCase() === 'мимоза')
    this.papayaPizzas = pizzas?.filter(p => p.name.toLowerCase() === 'папайя')
    this.primaveraPizzas = pizzas?.filter(p => p.name.toLowerCase() === 'примавера')
    this.cheesePizzas = pizzas?.filter(p => p.name.toLowerCase() === '4 сыра')
    this.sotrOtherPizzas(pizzas)
  }



  private sotrOtherPizzas(pizzas: PizzaInterface[]) {
    this.ownPizzas = pizzas?.filter(pizza => {
      return (
        pizza.name.toLowerCase() !== 'маргарита'&&
        pizza.name.toLowerCase() !== 'ананасовая'&&
        pizza.name.toLowerCase() !== 'пепперони'&&
        pizza.name.toLowerCase() !== 'diablo'&&
        pizza.name.toLowerCase() !== '4 сезона'&&
        pizza.name.toLowerCase() !== '4 сыра'&&
        pizza.name.toLowerCase() !== '4 мяса'&&
        pizza.name.toLowerCase() !== 'мимозе'&&
        pizza.name.toLowerCase() !== 'маринара'&&
        pizza.name.toLowerCase() !== 'капрезе'&&
        pizza.name.toLowerCase() !== 'тирольская'&&
        pizza.name.toLowerCase() !== 'папайя'&&
        pizza.name.toLowerCase() !== 'сицилийская'&&
        pizza.name.toLowerCase() !== 'нью-йоркская'&&
        pizza.name.toLowerCase() !== 'вегетарианская'&&
        pizza.name.toLowerCase() !== 'примавера'&&
        pizza.name.toLowerCase() !== 'средиземноморская'&&
        pizza.name.toLowerCase() !== 'калифорнийская'&&
        pizza.name.toLowerCase() !== 'тирольская'&&
        pizza.name.toLowerCase() !== 'Con Le Cozze'

      )
    })

  }

  /**
   * end of pizza arrays sorting block
   */
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }


  private closeAll(): void {
    this.primaAnimationTrigger = 'closed'
    this.marinaraAnimationTrigger = 'closed'
    this.margaritaAnimationTrigger = 'closed'
    this.pepperoniAnimationTrigger = 'closed'
    this.pineappleAnimationTrigger = 'closed'
    this.closeCouplePizzas();
  }

  private closeCouplePizzas(): void {
    this.diabloAnimationTrigger = 'closed'
    this.midSeaAnimationTrigger = 'closed'
    this.californianAnimationTrigger = 'closed'
    this.yorkAnimationTrigger = 'closed'
    this.cheeseAnimationTrigger = 'closed'
    this.closeMoreCouplePizzas();
  }

  private closeMoreCouplePizzas() {
    this.meatAnimationTrigger = 'closed'
    this.meatAnimationTrigger = 'closed'
    this.americanaAnimationTrigger = 'closed'
    this.ownPizzasAnimationTrigger = 'closed'
    this.closeMorePizzasAnimation();
  }

  private closeMorePizzasAnimation(): void {
    this.seasonsAnimationTrigger = 'closed'
    this.capreseAnimationTrigger = 'closed'
    this.vegSeaAnimationTrigger = 'closed'
    this.sicilianAnimationTrigger = 'closed'
    this.cozzeAnimationTrigger = 'closed'
    this.papayaAnimationTrigger = 'closed'
    this.tirolianAnimationTrigger = 'closed'
    this.mimosaAnimationTrigger = 'closed'
    this.valtellinaAnimationTrigger = 'closed'
  }
}


