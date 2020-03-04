import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { UserModule } from './user/user.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { GuestModule } from './guest/guest.module';
import { AuthGuard } from './auth.guard';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    CoreModule,
    GuestModule,
    AuthenticationModule,
    UserModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
