import { Injectable } from '@angular/core';
import { CourseCategory } from './course-category';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getAllCourseCategory(): CourseCategory[] {
    return this.CourseCategoryList;
  }

  getCourseById(id: number): CourseCategory | undefined {
    return this.CourseCategoryList.find(CourseCategory => CourseCategory.id === id);
  }

  readonly baseUrl = 'https://www.zabai.org/pluginfile.php';

  CourseCategoryList: CourseCategory[] = [
    {
      id: 0,
      name: 'Girls Education',
      teacher: 'Israt Jahan',
      category: 'Education',
      photo: `${this.baseUrl}/1458/course/overviewfiles/GirlsEducation_big.png`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione quam labore laborum, aliquam sapiente. Veritatis laboriosam, similique veniam qui repellendus libero animi ratione, autem assumenda reiciendis ipsa odit numquam!",
    },
    {
      id: 1,
      name: 'Personal-Hygiene',
      teacher: 'Israt Jahan Monica',
      category: 'Education',
      photo: `${this.baseUrl}/963/course/overviewfiles/Personal-Hygiene-Thumbnail-ENG-%281252-x-761%29.png`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione quam labore laborum, aliquam sapiente. Veritatis laboriosam, similique veniam qui repellendus libero animi ratione, autem assumenda reiciendis ipsa odit numquam!"
    },
    {
      id: 2,
      name: 'how-to-start-a-business',
      teacher: 'Israt Jahan',
      category: 'Education',
      photo: `${this.baseUrl}/74/course/overviewfiles/how-to-start-a-business-eng.png`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione quam labore laborum, aliquam sapiente. Veritatis laboriosam, similique veniam qui repellendus libero animi ratione, autem assumenda reiciendis ipsa odit numquam!"
    },
    {
      id: 3,
      name: 'Covid-19',
      teacher: 'Israt Jahan',
      category: 'Education',
      photo: `${this.baseUrl}/128/course/overviewfiles/Covid-19-Thumbnail-ENG-%281252x761%29.png`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione quam labore laborum, aliquam sapiente. Veritatis laboriosam, similique veniam qui repellendus libero animi ratione, autem assumenda reiciendis ipsa odit numquam!"
    },
    {
      id: 4,
      name: 'Digital Literacy',
      teacher: 'Israt Jahan',
      category: 'Education',
      photo: `${this.baseUrl}/54/course/overviewfiles/DL-web-thumbnail.png`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione quam labore laborum, aliquam sapiente. Veritatis laboriosam, similique veniam qui repellendus libero animi ratione, autem assumenda reiciendis ipsa odit numquam!"
    },
    {
      id: 5,
      name: 'Hospitality',
      teacher: 'Israt Jahan',
      category: 'Education',
      photo: `${this.baseUrl}/90/course/overviewfiles/Hospitality-II%20%283%29.png`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione quam labore laborum, aliquam sapiente. Veritatis laboriosam, similique veniam qui repellendus libero animi ratione, autem assumenda reiciendis ipsa odit numquam!"
    },
    {
      id: 6,
      name: 'English',
      teacher: 'Israt Jahan',
      category: 'Education',
      photo: `${this.baseUrl}/39/course/overviewfiles/English%20Course%20Thumbnail.jpg`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione quam labore laborum, aliquam sapiente. Veritatis laboriosam, similique veniam qui repellendus libero animi ratione, autem assumenda reiciendis ipsa odit numquam!"
    },
    {
      id: 7,
      name: 'Financial Literacy',
      teacher: 'Israt Jahan',
      category: 'Education',
      photo: `${this.baseUrl}/100/course/overviewfiles/Financial-Literacy_ENG_Cover1.png`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione quam labore laborum, aliquam sapiente. Veritatis laboriosam, similique veniam qui repellendus libero animi ratione, autem assumenda reiciendis ipsa odit numquam!"
    },
    {
      id: 8,
      name: 'Life Skills',
      teacher: 'Israt Jahan',
      category: 'Education',
      photo: `${this.baseUrl}/79/course/overviewfiles/life-skill-thumbnail%20%281%29.png`,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ratione quam labore laborum, aliquam sapiente. Veritatis laboriosam, similique veniam qui repellendus libero animi ratione, autem assumenda reiciendis ipsa odit numquam!"
    }
  ];

}
