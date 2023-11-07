import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseCategoryComponent } from './course-category/course-category.component';
import { AppRouteModule } from './app-route.module';
import { DetailsComponent } from './details/details.component';
import { DashComponent } from './dash/dash.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CourseCategoryComponent,
    DetailsComponent,
    DashComponent,
  ],
  imports: [
    BrowserModule,
    AppRouteModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
