import { Injectable } from '@angular/core'
import { Product } from '../models/product'

@Injectable({ providedIn: 'root' })
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      name: 'Watch',
      price: 2500,
      color: 'Black',
      discount: 15,
      thumbnail: 'assets/watch.webp',
      cartCount: 0,
    },
    {
      id: 2,
      name: 'Wallet',
      price: 900,
      color: 'Dark Gray',
      discount: 10,
      thumbnail: 'assets/wallet.jpeg',
      cartCount: 0,
    },
    {
      id: 3,
      name: 'Band',
      price: 100,
      color: 'Red',
      discount: 15,
      thumbnail: '/assets/band.webp',
      cartCount: 0,
    },
    {
      id: 4,
      name: 'Cap',
      price: 600,
      color: 'Black',
      discount: 15,
      thumbnail: '/assets/cap.webp',
      cartCount: 0,
    },
  ]
}
