import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserAddComponent } from './user/user-add/user-add.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductAddComponent } from './product/product-add/product-add.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { AuthGuard } from './pages/guards/auth.guard';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'about', loadComponent: () => import('./pages/about/about.component').then(c => c.AboutComponent)},
    {path:'login', component: LoginComponent},
    {path:'user',component:UserListComponent, canActivate: [AuthGuard]},
    {path:'user-add',component:UserAddComponent},
    {path:'user-edit/:id',component:UserEditComponent},
    {path:'product',component:ProductListComponent},
    {path:'product-add',component:ProductAddComponent},
    {path:'product-edit/:id',component:ProductEditComponent},
    {path:'category',component:CategoryListComponent},
    {path:'category-add',component:CategoryAddComponent},
    {path:'category-edit/:id',component:CategoryEditComponent},
    {path:'**',component:NotfoundComponent}
];

