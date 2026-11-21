import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllCoursesQuery } from './query.js';
import { HttpStatus, Inject } from '@nestjs/common';
import { COURSE_REPOSITORY_PORT } from '../../course.repository.port.js';
import type { CourseRepositoryPort } from '../../course.repository.port.js';

@QueryHandler(GetAllCoursesQuery)
export class GetAllCoursesHandler implements IQueryHandler<GetAllCoursesQuery> {
  constructor(
    @Inject(COURSE_REPOSITORY_PORT)
    private readonly courseRepository: CourseRepositoryPort,
  ) {}
  async execute(query: GetAllCoursesQuery): Promise<any> {
    const courses = await this.courseRepository.getAll();
    return { status: HttpStatus.OK, data: courses };
  }
}
