import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FriendFormComponent} from "./friend-form/friend-form.component";
import {FriendDetailsComponent} from "./friend-details/friend-details.component";

const routes: Routes = [
  {path: '', component: FriendFormComponent},
  {path: 'friends', component: FriendDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
