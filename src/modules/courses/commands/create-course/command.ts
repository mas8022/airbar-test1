import { CreateCourseDto } from '../../dtos/create-course.dto.js';

export class CreateCourseCommand {
  constructor(public dto: CreateCourseDto) {}
}
