import {Routes,RouterModule} from '@angular/router';

export const appRoutes:Routes = [
    { path: "", redirectTo: "Blog", pathMatch: 'full' },
    { path: "**", redirectTo: "Blog" },
];

export const AppRouting = RouterModule.forRoot(appRoutes,{useHash: true})