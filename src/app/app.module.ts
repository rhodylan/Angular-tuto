import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';

//import ngModel
import { FormsModule } from '@angular/forms';

//import angluar material
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { MySideMenuComponent } from './my-side-menu/my-side-menu.component';
import { MyMainContentComponent } from './my-main-content/my-main-content.component';
import { WarisanNusantaraComponent } from './warisan-nusantara/warisan-nusantara.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DemoComponent } from './demo/demo.component';
import { GetUsersComponent } from './get-users/get-users.component';
import { GetUserComponent } from './get-user/get-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { AdminComponent } from './admin/admin.component';
import { CollectionComponent } from './collection/collection.component';
import { AppMainNavComponent } from './app-main-nav/app-main-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavbarComponent,
    MySideMenuComponent,
    MyMainContentComponent,
    WarisanNusantaraComponent,
    DemoComponent,
    GetUsersComponent,
    GetUserComponent,
    AddUserComponent,
    UpdateUserComponent,
    DeleteUserComponent,
    AdminComponent,
    CollectionComponent,
    AppMainNavComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    //import ngModel
    FormsModule,
    //import angular material
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
