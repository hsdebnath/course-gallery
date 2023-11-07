import { Component, inject } from '@angular/core';
import { CourseCategory } from '../course-category';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  CourseCategoryList: CourseCategory[] = [];
  CourseService: CourseService = inject(CourseService);

  constructor() {
    this.CourseCategoryList = this.CourseService.getAllCourseCategory();
  }

}