import express from 'express';
import { AcademicDepartmentRoute } from '../modules/academicDepartment/academicDepartment.route';
import { AcademicFacultyRoute } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicSemesterRoute } from '../modules/academicSemester/academicSemester.route';
import { StudentRoute } from '../modules/student/student.route';
import { CourseRoute } from '../modules/course/course.route';
import { FacultyRoute } from '../modules/faculty/faculty.route';
import { RoomRoute } from '../modules/room/room.route';
import { BuildingRoute } from '../modules/building/building.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/academic-semester',
    route: AcademicSemesterRoute,
  },
  {
    path: '/academic-faculty',
    route: AcademicFacultyRoute,
  },
  {
    path: '/academic-department',
    route: AcademicDepartmentRoute,
  },
  {
    path: '/student',
    route: StudentRoute,
  },
  {
    path: '/course',
    route: CourseRoute,
  },
  {
    path: '/faculty',
    route: FacultyRoute,
  },
  {
    path: '/room',
    route: RoomRoute,
  },
  {
    path: '/building',
    route: BuildingRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
