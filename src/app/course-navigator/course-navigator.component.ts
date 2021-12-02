import { Component, OnInit } from '@angular/core';
import {CourseService} from "../../services/CourseService";

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {

  constructor(private coursescv: CourseService) { }
  courses: any[] | undefined;
  selectedCourse = {
    modules: [],
    id: undefined
  };
  selectedModule = {
    modules: [],
    id: undefined
  };


  ngOnInit(): void {
  this.coursescv.findAllCourses()
  .then(courses => this.courses = courses)
  }

  selectCourse(course: any) {
  this.selectedCourse = course;
  }


  selectModule(module: any) {
this.selectedModule =module;
  }
}
