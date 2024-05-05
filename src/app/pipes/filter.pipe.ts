import { Pipe, PipeTransform } from '@angular/core'
import { Student } from '../models/students'

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(list: Student[], filterBy: string) {
    console.log('FILTER PIPE CALLED!')
    if (
      filterBy.toLowerCase() === 'all' ||
      filterBy === '' ||
      list.length === 0
    ) {
      return list
    } else {
      return list.filter((std) => {
        return std.gender.toLowerCase() === filterBy.toLowerCase()
      })
    }
  }
}
