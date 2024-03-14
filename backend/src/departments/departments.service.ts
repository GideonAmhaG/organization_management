import { Injectable } from '@nestjs/common';
import { Department } from './departments.model';

@Injectable()
export class DepartmentsService {
  private readonly departments: Department[] = []; // In-memory storage

  create(department: Department) {
    department.id = Math.random().toString();
    this.departments.push(department);
    return department;
  }

  update(id: string, updatedDepartment: Department) {
    const index = this.departments.findIndex((dept) => dept.id === id);
    if (index !== -1) {
      this.departments[index] = { ...updatedDepartment, id };
      return this.departments[index];
    }
    throw new Error(`Department with ID ${id} not found.`);
  }

  findOne(id: string) {
    const department = this.departments.find((dept) => dept.id === id);
    if (!department) {
      throw new Error(`Department with ID ${id} not found.`);
    }
    return department;
  }
}
