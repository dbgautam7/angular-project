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

export class ResponseUser {
  experience?: {
    company: string
    end: Date
    position: string
    start: Date
    totalExp: number
  }[]
  password: string
  skills?: string[]
  username: string
  id?: string
}
