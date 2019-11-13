import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

platformBrowserDynamic().bootstrapModule(AppModule).then(() => {
  if (environment.production && 'serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistration().then(active =>
      !active && navigator.serviceWorker.register('/ngsw-worker.js')).catch(console.error);
  }
}).catch(err => console.log(err));


