import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { ExtraOptions, Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    { path: 'back-office', loadChildren: './app-portal/app-portal.module#AppPortalModule' }
];

const config: ExtraOptions = {
    useHash: true,
  };

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
