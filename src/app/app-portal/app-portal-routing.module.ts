import { HomeComponent } from './pages/home/home.component';
import { AppPortalComponent } from './app-portal.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AppPortalComponent,
        children: [{
            path: 'dashboard',
            component: HomeComponent,
          },
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
          }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppPortalRoutingModule { }
