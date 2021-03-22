import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedDetailComponent } from './feed-detail/feed-detail.component';
import { FeedsComponent } from './feeds/feeds.component';

const routes: Routes = [
 { path: '', redirectTo: 'feed-list', pathMatch: 'full'},
 { path: 'feed-list', component: FeedsComponent},
 { path: 'feed-detail', component: FeedDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
