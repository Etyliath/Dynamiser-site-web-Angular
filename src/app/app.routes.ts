import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        title:'Accueil'
    },
    {
        path:'about',
        component:AboutComponent,
        title:'A Propos'
    },
    {
        path:'contact',
        component:ContactComponent,
        title:'Contact'
    }
];
