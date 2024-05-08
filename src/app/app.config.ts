import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http'
import { routes } from './routes/base.routes'
import { ApplicationConfig } from '@angular/core'
import { provideClientHydration } from '@angular/platform-browser'
import { provideRouter } from '@angular/router'
import { AuthInterceptorService } from './services/auth-interceptor.service'
import { LoggingInterceptorService } from './services/logging-interceptor.service'

export const appConfig: ApplicationConfig = {
  providers: [
    provideClientHydration(),
    provideRouter(routes),
    provideHttpClient(),
    provideHttpClient(
      withInterceptors([AuthInterceptorService, LoggingInterceptorService]),
    ),
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoggingInterceptorService,
    //   multi: true,
    // },
  ],
}
