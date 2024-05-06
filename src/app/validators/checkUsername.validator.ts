import { AbstractControl } from '@angular/forms'

const validateUsername = (username: string) => {
  const takenUsernames = ['dbg', 'tul', 'suk']
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (takenUsernames.includes(username)) {
        resolve({ validUsername: true })
      } else {
        resolve(null)
      }
    }, 5000)
  })
}

export const checkUsername = (control: AbstractControl) => {
  validateUsername(control.value)
}
