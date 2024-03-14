import { configureStore } from '@reduxjs/toolkit';
import departmentsReducer from './departmentsSlice'; 

const store = configureStore({
  reducer: {
    departments: departmentsReducer, 
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
