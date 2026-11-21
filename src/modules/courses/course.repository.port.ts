import { Course } from 'src/generated/prisma/client.js';
import { CreateCourseDto } from './dtos/create-course.dto.js';

export const COURSE_REPOSITORY_PORT = Symbol('COURSE_REPOSITORY_PORT');

export interface CourseRepositoryPort {
  create(dto: CreateCourseDto);
   getAll(): Promise<Course[]>
}
