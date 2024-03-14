import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store'; 
import { deleteDepartment } from '../store/departmentsSlice'; 
import { Button } from '@mantine/core'; 

interface Department {
  id: number;
  name: string;
  description: string;
}

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const departments = useSelector((state: RootState) => state.departments);

  const handleDeleteDepartment = (departmentId: number) => {
    dispatch(deleteDepartment(departmentId)); // Delete department by ID
  };

  return (
    <div>
      <h1>Department Dashboard</h1>
      <ul>
        {departments.map((department: Department) => (
          <li key={department.id}>
            <strong>{department.name}</strong> ({department.description})
            <Button onClick={() => handleDeleteDepartment(department.id)}>Delete</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
