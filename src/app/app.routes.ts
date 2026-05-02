import { Routes } from '@angular/router';

/* all of my paths, for home, blank/no entered path,
favourites, trending and search */
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
  loadComponent: () =>
    import('./my-favourites/my-favourites.page').then(m => m.MyFavouritesPage)
},
  {
    path: 'trending',
    loadComponent: () => import('./trending/trending.page').then(m => m.TrendingPage),
  },
  {
    path: 'search',
    loadComponent: () => import('./searchpage/searchpage.page').then(m => m.SearchpagePage),
  },
  {
  path: 'moviedetails/:id',
  loadComponent: () => import('./moviedetails/moviedetails.page').then(m => m.MoviedetailsPage)
},
  {
  path: 'persondetails/:id',
  loadComponent: () => import('./persondetails/persondetails.page').then(m => m.persondetailsPage)
},
  
];