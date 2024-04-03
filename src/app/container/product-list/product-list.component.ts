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
      cartCount: 0,
    },
    {
      name: 'Wallet',
      price: 900,
      color: 'Dark Gray',
      discount: 10,
      thumbnail: 'assets/wallet.jpeg',
      cartCount: 0,
    },
    {
      name: 'Band',
      price: 100,
      color: 'Red',
      discount: 15,
      thumbnail: '/assets/band.webp',
      cartCount: 0,
    },
    {
      name: 'Cap',
      price: 600,
      color: 'Black',
      discount: 15,
      thumbnail: '/assets/cap.webp',
      cartCount: 0,
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

  incrementCartCount(product: any) {
    product.cartCount < this.stockCount && product.cartCount++
  }

  decrementCartCount(product: any) {
    product.cartCount > 0 && product.cartCount--
  }
}
