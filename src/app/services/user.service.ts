import { Injectable } from '@angular/core'
import { User } from '../models/user'

@Injectable({ providedIn: 'root' })
export class UserService {
  users: User[] = [
    new User('suhan', 'Suhan Basnet', 'Male', 8, true),
    new User('ayan', 'Ayan Basnet', 'Male', 1, false),
  ]

  getAllUsers() {
    return this.users
  }

  createUser(
    username: string,
    name: string,
    gender: string,
    age: number,
    isStudent?: boolean,
  ) {
    let user = new User(username, name, gender, age, isStudent)
    this.users.push(user)
  }
}
