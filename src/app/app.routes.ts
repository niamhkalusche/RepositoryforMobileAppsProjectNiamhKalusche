import { Routes } from '@angular/router';

/* all of my paths, for home, for blank no entered path,
favourites and trending */
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'favourites',
    loadComponent: () => import('./my-favourites/my-favourites.page').then( m => m.MyFavouritesPage)
  },
  {
    path: 'trending',
    loadComponent: () => import('./trending/trending.page').then( m => m.TrendingPage)
  },
  {
    path: 'search',
    loadComponent: () => import('./searchpage/searchpage.page').then( m => m.SearchpagePage)
  },
];
