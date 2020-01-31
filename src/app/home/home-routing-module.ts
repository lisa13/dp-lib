import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MyDocumentsComponent } from '../pages/dashboard'
import { TeamDocumentsComponent } from '../pages/dashboard'

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: 'my-documents',
                component: MyDocumentsComponent
            },
            {
                path: 'team-documents',
                component: TeamDocumentsComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {
}
