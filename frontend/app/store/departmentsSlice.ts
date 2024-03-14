import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Department {
  id: number;
  name: string;
  description: string;
}

const initialState: Department[] = [];

const departmentsSlice = createSlice({
  name: 'departments',
  initialState,
  reducers: {
    addDepartment: (state, action: PayloadAction<Department>) => {
      state.push(action.payload);
    },
    deleteDepartment: (state, action: PayloadAction<number>) => {
      return state.filter((dept) => dept.id !== action.payload);
    },
   
  },
});

export const { addDepartment, deleteDepartment } = departmentsSlice.actions;
export default departmentsSlice.reducer;
