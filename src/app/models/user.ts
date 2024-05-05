export class User {
  username: string
  name: string
  gender: string
  age: number
  isStudent: boolean

  constructor(
    username: string,
    name: string,
    gender: string,
    age: number,
    isStudent: boolean,
  ) {
    this.username = username
    this.name = name
    this.gender = gender
    this.age = age
    this.isStudent = isStudent
  }
}
