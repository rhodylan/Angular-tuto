import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { GetUserComponent } from './get-user/get-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

const routes: Routes = [
  {path: 'demo', component: DemoComponent},
  {path: 'get-users', component: GetUsersComponent},
  {path: 'get-user', component: GetUserComponent},
  {path: 'add-user', component: AddUserComponent},
  {path: 'update-user', component: UpdateUserComponent},
  {path: 'delete-user', component: DeleteUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
