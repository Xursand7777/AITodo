import {ApplicationConfig, importProvidersFrom, provideZoneChangeDetection} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {ToastrModule} from 'ngx-toastr';
import { provideIcons } from '@ng-icons/core';
import {
  heroPencilSquareMini,
  heroTrashMini,
  heroSquare3Stack3dMini,
  heroExclamationTriangleMini,
  heroCheckCircleMini,
  heroPlusMini, heroPauseCircleMini
} from '@ng-icons/heroicons/mini';
import {
  heroSquaresPlusSolid,
  heroListBulletSolid,
  heroUsersSolid,
  heroCalendarDaysSolid,
  heroSunSolid,
  heroUserSolid, heroClockSolid,
} from '@ng-icons/heroicons/solid'
import {QuillModule} from 'ngx-quill';
import {provideHttpClient} from '@angular/common/http';
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(ToastrModule.forRoot()),
    importProvidersFrom(QuillModule.forRoot()),
    provideIcons({
      heroPencilSquareMini,
      heroPauseCircleMini,
      heroTrashMini,
      heroSquare3Stack3dMini,
      heroCheckCircleMini,
      heroExclamationTriangleMini,
      heroPlusMini,
      heroSquaresPlusSolid,
      heroListBulletSolid,
      heroUsersSolid,
      heroUserSolid,
      heroCalendarDaysSolid,
      heroSunSolid,
      heroClockSolid
    })
  ]
};
