
import {Routes, RouterModule} from '@angular/router'
import {TimeLineComponent} from './time-line/time-line.component';
import {PostinputComponent} from './postinput/postinput.component';

const APP_ROUTES: Routes =[
    {path:"", redirectTo:"/timeline",pathMatch:"full"},
    {path:"timeline", component:TimeLineComponent},
    {path:"postar", component:PostinputComponent}

]

export const  routing = RouterModule.forRoot(APP_ROUTES);