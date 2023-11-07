import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../course.service';
import { CourseCategory } from '../course-category';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  // standalone: true,
  // imports: [
  //   CommonModule,
  //   ReactiveFormsModule
  // ],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  courseService = inject(CourseService);
  courseCategory: CourseCategory | undefined;

  constructor() {
    const courseId = parseInt(this.route.snapshot.params['id']);
    // this.courseService.getCourseById(courseId).then(CourseCategory => {
    //   this.CourseCategory = CourseCategory;
    // });
    this.courseCategory = this.courseService.getCourseById(courseId);
  }

}
