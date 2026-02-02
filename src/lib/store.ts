import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import skillsReducer from '../features/skills/skillsSlice';
import projectsReducer from '../features/projects/projectsSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            theme: themeReducer,
            skills: skillsReducer,
            projects: projectsReducer,
        },
    });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
