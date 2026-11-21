import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateCourseCommand } from './commands/create-course/command.js';
import { CreateCourseDto } from './dtos/create-course.dto.js';
import { GetAllCoursesQuery } from './queries/get-all-courses/query.js';

@Controller('courses')
export class CoursesController {
  constructor(private readonly commandBus: CommandBus, private readonly queryBus: QueryBus) {}

  @Post('create')
  async CreateCourse(@Body() dto: CreateCourseDto) {
    return await this.commandBus.execute(new CreateCourseCommand(dto));
  }

  @Get("get-all-courses")
  async getAllCourses(){
    return await this.queryBus.execute(new GetAllCoursesQuery())
  }
}
