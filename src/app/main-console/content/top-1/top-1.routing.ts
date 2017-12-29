import { Top1Component } from './top-1.component';
import { Top1HomeComponent } from './top1-home/top1-home.component';
import { Top1Sub1Component } from './top1-sub1/top1-sub1.component';
import { Top1Sub2Component } from './top1-sub2/top1-sub2.component';


export const Top1Routing = [
    { path: "", component: Top1HomeComponent },
    { path: "layout-style", component: Top1Sub1Component},
    { path: "script", component: Top1Sub2Component}
];
