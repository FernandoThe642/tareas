import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideFirebaseApp(() => 
      initializeApp({
        "projectId":"tareas-18ba7",
        "appId":"1:395462046212:web:9ad38df9485e2423127b51",
        "storageBucket":"tareas-18ba7.firebasestorage.app",
        "apiKey":"AIzaSyArlszv0EPf9CYeRhH4yAAK4ZeCZ02U6OM",
        "authDomain":"tareas-18ba7.firebaseapp.com",
        "messagingSenderId":"395462046212"
        })), 
    provideFirestore(() => getFirestore())]
};
