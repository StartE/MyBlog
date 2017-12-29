import { Top3Component } from './top-3.component';
import { Top3HomeComponent } from './top3-home/top3-home.component';
import { Top3Sub1Component } from './top3-sub1/top3-sub1.component';
import { Top3Sub2Component } from './top3-sub2/top3-sub2.component';


export const Top3Routing = [
    { path: "", component: Top3HomeComponent },
    { path: "tools", component: Top3Sub1Component},
    { path: "resources", component: Top3Sub2Component}
];
