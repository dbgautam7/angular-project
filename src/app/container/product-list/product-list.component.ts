import { ProductService } from './../../services/product.service'
import { NgFor, NgIf } from '@angular/common'
import {
  Component,
  DoCheck,
  Input,
  OnInit,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core'
import { ProductComponent } from './product/product.component'
import { Product } from '../../models/product'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [NgFor, NgIf, ProductComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit, DoCheck {
  addToCartCount: number = 0
  stockCount: number = 7
  product = {
    name: 'Watch',
    price: 2500,
    color: 'Black',
    discount: 15,
    thumbnail: 'assets/watch.webp',
  }

  @Input()
  searchText: string = ''
  activeRoute: ActivatedRoute = inject(ActivatedRoute)

  selectedProduct: Product

  productService: ProductService = inject(ProductService)

  getDiscountedAmount() {
    return (
      this.product.price - (this.product.discount * this.product.price) / 100
    )
  }

  get filteredProducts() {
    return this.productService.products.filter(
      (product) =>
        this.searchText === '' ||
        product?.name?.toLowerCase()?.includes(this.searchText?.toLowerCase()),
    )
  }
  get() {
    console.log(this.selectedProduct, 'selectedProduct')
  }
  onNameChange(e: any) {
    this.product.name = e.target.value
  }

  incrementCartCount(product: any) {
    product.cartCount < this.stockCount && product.cartCount++
  }

  decrementCartCount(product: any) {
    product.cartCount > 0 && product.cartCount--
  }

  ngOnInit(): void {
    // this.searchText = this.activeRoute.snapshot.queryParamMap.get('search')
  }

  counter = signal(0)
  doubleCounter = computed(() => this.counter() * 2)
  incrementCounter() {
    this.counter.update((preVal) => preVal + 1)
  }

  decrementCounter() {
    this.counter.update((preVal) => preVal - 1)
  }
  ngDoCheck(): void {
    console.log('called from product component')
  }

  constructor() {
    effect(() => {
      console.log('counter value changes'), this.counter()
    })
  }
}
