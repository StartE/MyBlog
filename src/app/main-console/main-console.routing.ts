import {Routes,RouterModule} from '@angular/router';
import { MainConsoleComponent } from './main-console.component';

import { Top0Component } from './content/top-0/top-0.component';
import { Top1Component } from './content/top-1/top-1.component';
import { Top2Component } from './content/top-2/top-2.component';
import { Top3Component } from './content/top-3/top-3.component';
import { Top1Routing } from './content/top-1/top-1.routing';
import { Top2Routing } from './content/top-2/top-2.routing';
import { Top3Routing } from './content/top-3/top-3.routing';

import { ArticlesComponent } from './articles/articles.component';

export const MainConsoleRouting = RouterModule.forChild([
    {
        path:'Blog',component: MainConsoleComponent,
        children:[
            { path: "", redirectTo: "dashboard", pathMatch: 'full' },
            { path: "dashboard", component: Top0Component},
            { path: "web-dev", component: Top1Component, children: Top1Routing},
            { path: "data-science", component:Top2Component, children: Top2Routing},
            { path: "tools-resources", component: Top3Component, children: Top3Routing },
            { path: "articles/:path/:subPath/:id",component: ArticlesComponent}
        ]
    }
]);