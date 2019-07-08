import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

import { DetailHeroComponent } from './components/detail-hero/detail-hero.component';
import { SearchHeroesComponent } from './components/serarch-heroes/search.heroes.component';


const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'search/:hero', component: SearchHeroesComponent },
    { path: 'detail/:id', component: DetailHeroComponent },
    {
        path: '**', redirectTo: 'home',
        pathMatch: 'full'
    },
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);

