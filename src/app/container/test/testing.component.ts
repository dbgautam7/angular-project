import { NgFor } from '@angular/common'
import { Component } from '@angular/core'

interface Item {
  id: number
  imageUrl: string
  imageAlt: string
  description: string
  label: string
  position: {
    x: string
    y: string
  }
}

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgFor],
  templateUrl: './test.component.html',
})
export class TestComponent {
  items: Item[] = [
    {
      id: 1,
      imageUrl: '../../../assets/letter pad.png',
      imageAlt: 'Description for image 1',
      description: 'This is wallet.',
      label: 'Shop Now',
      position: {
        x: '54px',
        y: '0',
      },
    },
    {
      id: 2,
      imageUrl: '../../../assets/animal4.jpeg',
      imageAlt: 'Description for image 2',
      description: 'This is my logo.',
      label: 'Click Me',
      position: {
        x: '455px',
        y: '0',
      },
    },
    {
      id: 3,
      imageUrl: '../../../assets/Logo.png',
      imageAlt: 'Description for image 3',
      description: 'This is monlam logo.',
      label: 'Make P',
      position: {
        x: '847px',
        y: '0',
      },
    },
  ]

  onItemClick(itemId: number): void {
    console.log(`Item with ID ${itemId} clicked`)
  }
}
