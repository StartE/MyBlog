import { OtherComponent } from './other.component';
import { OtherHomeComponent } from './other-home/other-home.component';
import { OtherSub1Component } from './other-sub1/other-sub1.component';
import { OtherSub2Component } from './other-sub2/other-sub2.component';


export const OtherRouting = [
    { path: "", component: OtherHomeComponent },
    { path: "sub1", component: OtherSub1Component},
    { path: "sub2", component: OtherSub2Component}
];