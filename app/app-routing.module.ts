/**
 * Created by LiYN on 2017/1/2.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChannelComponent } from './channel.component';

const routes: Routes = [
    { path: '', redirectTo :'/channel',pathMatch: 'full'},
    { path: 'channel', component: ChannelComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
