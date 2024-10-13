import { Routes } from '@angular/router';
import { CocktailListComponent } from './cocktail/cocktail-list/cocktail-list.component';
import { CocktailDetailComponent } from './cocktail/cocktail-detail/cocktail-detail.component';

export const routes: Routes = [
    { path: 'cocktails', component: CocktailListComponent},
    { path: 'cocktails/:id', component: CocktailDetailComponent},
    { path: '**', redirectTo: 'cocktails' }
];
