import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateCourseCommand } from './command.js';
import { HttpStatus, Inject } from '@nestjs/common';
import { COURSE_REPOSITORY_PORT } from '../../course.repository.port.js';
import type { CourseRepositoryPort } from '../../course.repository.port.js';

@CommandHandler(CreateCourseCommand)
export class CreateCourseHandler implements ICommandHandler<CreateCourseCommand> {
  constructor(
    @Inject(COURSE_REPOSITORY_PORT)
    private readonly courseRepository: CourseRepositoryPort,
  ) {}
  async execute(command: CreateCourseCommand): Promise<any> {
    await this.courseRepository.create(command.dto);
    return { status: HttpStatus.OK, message: 'create course successfully' };
  }
}
