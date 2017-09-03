import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LanguagesComponent } from './pages/languages/languages.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'languages',
        children: [],
        component: LanguagesComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
