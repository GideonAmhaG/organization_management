import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DepartmentsService } from './departments/departments.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Initialize sample data
  const departmentsService = app.get(DepartmentsService);
  departmentsService.create({
    id: '131231',
    name: 'CEO',
    description: 'Chief Executive Officer',
    managingDepartmentId: null,
  });
  await app.listen(3000);
}
bootstrap();
