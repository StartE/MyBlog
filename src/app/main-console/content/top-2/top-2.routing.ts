import { Top2Component } from './top-2.component';
import { Top2HomeComponent } from './top2-home/top2-home.component';
import { Top2Sub1Component } from './top2-sub1/top2-sub1.component';
import { Top2Sub2Component } from './top2-sub2/top2-sub2.component';
import { Top2Sub3Component } from './top2-sub3/top2-sub3.component';


export const Top2Routing = [
    { path: "", component: Top2HomeComponent },
    { path: "analysis", component: Top2Sub1Component},
    { path: "machine-learning", component: Top2Sub2Component},
    { path: "visualization", component: Top2Sub3Component}
];
