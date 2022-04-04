import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/loader',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'loader',
    loadChildren: () => import('./loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signout',
    loadChildren: () => import('./signout/signout.module').then( m => m.SignoutPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'start',
    loadChildren: () => import('./start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'finish',
    loadChildren: () => import('./finish/finish.module').then( m => m.FinishPageModule)
  },
  {
    path: 'finish-sucess',
    loadChildren: () => import('./finish-sucess/finish-sucess.module').then( m => m.FinishSucessPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'bestofweek',
    loadChildren: () => import('./bestofweek/bestofweek.module').then( m => m.BestofweekPageModule)
  },
  {
    path: 'bestofbest',
    loadChildren: () => import('./bestofbest/bestofbest.module').then( m => m.BestofbestPageModule)
  },
  {
    path: 'searchfriend',
    loadChildren: () => import('./searchfriend/searchfriend.module').then( m => m.SearchfriendPageModule)
  },
  {
    path: 'findplaces',
    loadChildren: () => import('./findplaces/findplaces.module').then( m => m.FindplacesPageModule)
  },
  {
    path: 'profilefriend',
    loadChildren: () => import('./profilefriend/profilefriend.module').then( m => m.ProfilefriendPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
