import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';
import {RootState} from './rootReducer';

export interface Task {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
}

interface TodoState {
    tasks: Task[];
}
const tasksAdapter = createEntityAdapter<Task>();

export const slice = createSlice({
    name: 'test',
    initialState: tasksAdapter.getInitialState(),
    reducers: {
        addTask: tasksAdapter.addOne,
        updateTask: tasksAdapter.updateOne,
        deleteTask: tasksAdapter.removeOne,
    },
});

export const {addTask, updateTask, deleteTask} = slice.actions;
export default slice.reducer;

// export const tasksSelector = (state: RootState) => state.tasksReducer;
export const selector = tasksAdapter.getSelectors(
    (state: RootState) => state.tasksReducer,
);
export const tasksSelector = selector.selectEntities;
