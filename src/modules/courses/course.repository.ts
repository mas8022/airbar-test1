import { PrismaService } from 'src/common/services/prisma/prisma.service.js';
import { CourseRepositoryPort } from './course.repository.port.js';
import { CreateCourseDto } from './dtos/create-course.dto.js';
import { Course } from 'src/generated/prisma/client.js';

export class CourseRepository implements CourseRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCourseDto) {
    await this.prisma.course.create({ data: dto });
  }

  async getAll(): Promise<Course[]> {
    return await this.prisma.course.findMany();
  }
}
