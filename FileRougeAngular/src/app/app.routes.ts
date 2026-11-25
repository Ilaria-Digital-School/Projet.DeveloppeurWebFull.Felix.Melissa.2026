import { Routes } from '@angular/router';
import { Recipe } from './components/recipe/recipe';
import { Home } from './components/home/home';
import { Inscription } from './components/inscription/inscription';
import { Connexion } from './components/connexion/connexion';
import { Favoris } from './components/favoris/favoris';

export const routes: Routes = [
   
    { path: '', component: Home},
    { path: 'recipe', component : Recipe },
    { path: 'inscription',component : Inscription},
    { path: 'connexion', component : Connexion},
    { path: 'favoris', component : Favoris}

];