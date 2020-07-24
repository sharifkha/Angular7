import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogposListComponent } from './blogpos-list/blogpos-list.component';
import { BlogposDetailComponent } from './blogpos-detail/blogpos-detail.component';

const routes: Routes = [
  { path: 'blog', component: BlogposListComponent },
  { path: 'blog/:id', component: BlogposDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogpostRoutingModule {}
