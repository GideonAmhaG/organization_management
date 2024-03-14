import { Controller, Post, Body, Put, Param, Get } from '@nestjs/common';
import { Department } from './departments.model';
import { DepartmentsService } from './departments.service';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post()
  create(@Body() department: Department) {
    return this.departmentsService.create(department);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() department: Department) {
    return this.departmentsService.update(id, department);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.departmentsService.findOne(id);
  }
}
