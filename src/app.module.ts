import { Module } from '@nestjs/common';
import { PrismaModule } from './common/services/prisma/prisma.module.js';
import { CoursesModule } from './modules/courses/courses.module.js';

@Module({
  imports: [PrismaModule, CoursesModule],
  providers: [],
})
export class AppModule {}
