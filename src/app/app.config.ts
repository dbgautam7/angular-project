import { routes } from './routes/base.routes'
import { ApplicationConfig } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'

export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideRouter(routes)],
}
