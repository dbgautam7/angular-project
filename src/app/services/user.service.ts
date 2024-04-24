import { Injectable } from '@angular/core'
import { User } from '../models/user'
import { LoggerService } from './logger.service'

@Injectable()
export class UserService {
  users: User[] = [
    new User('Suhan Basnet', 'Male', 8, true),
    new User('Ayan Basnet', 'Male', 1, false),
  ]

  constructor(private loggerService: LoggerService) {}

  getAllUsers() {
    return this.users
  }

  createUser(name: string, gender: string, age: number, isStudent: boolean) {
    let user = new User(name, gender, age, isStudent)
    this.users.push(user)
    this.loggerService.logMessage(name)
  }
}
