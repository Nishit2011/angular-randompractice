import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TestComponent } from './test/test.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PostDetailComponent } from './post-detail/post-detail.component';

const routes:Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
      },
    
    {path: 'posts', component: PostsComponent},
    {path:'posts/:id', component: PostDetailComponent},
    {path: 'test', component: TestComponent},
    {path: '**', component: PageNotFoundComponent}
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
export const routingComponents = [
    PostsComponent, TestComponent, PageNotFoundComponent, PostDetailComponent
]