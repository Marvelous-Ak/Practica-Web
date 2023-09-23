import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { ToolComponent } from './tool/tool.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NablogComponent } from './nablog/nablog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  {path: 'tool', component: ToolComponent},
  {path: 'table', component: TableComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'navelog', component: NablogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
