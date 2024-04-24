export class User {
  name: string
  gender: string
  age: number
  isStudent: boolean

  constructor(name: string, gender: string, age: number, isStudent: boolean) {
    this.name = name
    this.gender = gender
    this.age = age
    this.isStudent = isStudent
  }
}
