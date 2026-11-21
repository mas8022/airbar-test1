import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller.js';
import { CqrsModule } from '@nestjs/cqrs';
import { COURSE_REPOSITORY_PORT } from './course.repository.port.js';
import { CourseRepository } from './course.repository.js';
import { CreateCourseHandler } from './commands/create-course/handler.js';

@Module({
  imports: [CqrsModule],
  controllers: [CoursesController],
  providers: [
    { provide: COURSE_REPOSITORY_PORT, useClass: CourseRepository },
    CreateCourseHandler,
  ],
})
export class CoursesModule {}
