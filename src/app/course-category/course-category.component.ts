import { Component, Input } from '@angular/core';
import { CourseCategory } from '../course-category';

@Component({
  selector: 'app-course-category',
  templateUrl: './course-category.component.html',
  styleUrls: ['./course-category.component.css']
})
export class CourseCategoryComponent {
  @Input() CourseCategory!: CourseCategory;
}
