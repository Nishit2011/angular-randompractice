import { TestComponent } from './test/test.component';
import { PostsComponent } from './posts/posts.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes = [
    {path: 'posts', component: PostsComponent},
    {path: 'test', component: TestComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
export const routingComponents = [
    PostsComponent, TestComponent
]