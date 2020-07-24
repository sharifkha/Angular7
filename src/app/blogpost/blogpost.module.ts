import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogpostRoutingModule } from './blogpost-routing.module';
import { BlogpostFeatureComponent } from './blogpost-feature/blogpost-feature.component';
import { BlogposListComponent } from './blogpos-list/blogpos-list.component';
import { BlogposDetailComponent } from './blogpos-detail/blogpos-detail.component';
import { BlogposRecentComponent } from './blogpos-recent/blogpos-recent.component';
import { CategoriesComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    BlogpostFeatureComponent,
    BlogposListComponent,
    BlogposDetailComponent,
    BlogposRecentComponent,
    CategoriesComponent,
  ],
  imports: [CommonModule, BlogpostRoutingModule],
  exports: [BlogpostFeatureComponent],
})
export class BlogpostModule {}
