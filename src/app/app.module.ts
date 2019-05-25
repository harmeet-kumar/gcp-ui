import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ModalComponent } from './shared/modal/modal.component';
import { SearchUsersPipe } from './shared/pipes/search-users.pipe';
import { UserComponent } from './user/user.component';
import {HttpClientModule} from '@angular/common/http' 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ModalComponent,
    SearchUsersPipe,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
