import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductComponent } from './components/product/product.component';
import { MentionsLegalesComponent } from './components/mentions-legales/mentions-legales.component';

export const routes: Routes = [
    {
        path:'product/:id',
        component:ProductComponent,
        title:'Produit'
    },
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
    },
    {
        path:'mentions',
        component:MentionsLegalesComponent,
        title:'Mentions légales'
    }
];
