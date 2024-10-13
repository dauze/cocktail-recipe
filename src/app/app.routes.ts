import { Routes } from '@angular/router';
import { CocktailCardComponent } from './cocktail/cocktail-card/cocktail-card.component';
import { CocktailListComponent } from './cocktail/cocktail-list/cocktail-list.component';

export const routes: Routes = [

    { path: 'cocktails', component: CocktailListComponent, children:[
        { path: ':id', component: CocktailListComponent}
    ] },
    { path: '', redirectTo: 'cocktails', pathMatch: 'full' },
     { path: '**', redirectTo: 'cocktails' }
];
