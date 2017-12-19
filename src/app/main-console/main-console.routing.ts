import {Routes,RouterModule} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OtherComponent } from './other/other.component';
import { ImageComponent } from './image/image.component';
import { BookComponent } from './book/book.component';

import { MainConsoleComponent } from './main-console.component';

export const MainConsoleRouting = RouterModule.forChild([
    {
        path:'Blog',component: MainConsoleComponent,
        children:[
            { path: "", redirectTo: "dashboard", pathMatch: 'full' },
            { path: "dashboard", component: DashboardComponent},
            { path: "image", component: ImageComponent},
            { path: "book", component:BookComponent},
            { path: "other", component: OtherComponent},
        ]
    }
]);