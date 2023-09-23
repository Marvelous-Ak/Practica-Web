import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MaincuerpoComponent } from './maincuerpo/maincuerpo.component';
import { FeaturesComponent } from './features/features.component';
import { ToolComponent } from './tool/tool.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NablogComponent } from './nablog/nablog.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MaincuerpoComponent,
    FeaturesComponent,
    ToolComponent,
    HomeComponent,
    NavbarComponent,
    TableComponent,
    LoginComponent,
    RegisterComponent,
    NablogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
