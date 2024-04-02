import { NgFor } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  addToCartCount: number = 0
  stockCount: number = 7
  product = {
    name: 'Watch',
    price: 2500,
    color: 'Black',
    discount: 15,
    thumbnail: 'assets/watch.webp',
  }

  products = [
    {
      name: 'Watch',
      price: 2500,
      color: 'Black',
      discount: 15,
      thumbnail: 'assets/watch.webp',
    },
    {
      name: 'Wallet',
      price: 900,
      color: 'Dark Gray',
      discount: 10,
      thumbnail: 'assets/watch.webp',
    },
    {
      name: 'Band',
      price: 100,
      color: 'Red',
      discount: 15,
      thumbnail: 'assets/watch.webp',
    },
    {
      name: 'Cap',
      price: 600,
      color: 'Black',
      discount: 15,
      thumbnail: 'assets/watch.webp',
    },
  ]

  getDiscountedAmount() {
    return (
      this.product.price - (this.product.discount * this.product.price) / 100
    )
  }

  onNameChange(e: any) {
    this.product.name = e.target.value
  }

  incrementCartCount() {
    this.addToCartCount < this.stockCount && this.addToCartCount++
  }

  decrementCartCount() {
    this.addToCartCount > 0 && this.addToCartCount--
  }
}
