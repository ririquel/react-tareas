import {combineReducers} from '@reduxjs/toolkit';

import tasksReducer from './tasksSlice';

export type RootState = ReturnType<typeof rootReducer>;
export const rootReducer = combineReducers({
    tasksReducer,
});
