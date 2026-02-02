import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Skill {
    name: string;
    category: 'Frontend' | 'Backend' | 'Tools' | 'Other';
    level?: number; // 0-100 for progress bars
    iconName?: string;
}

interface SkillsState {
    items: Skill[];
    filter: 'All' | 'Frontend' | 'Backend' | 'Tools';
}

const initialState: SkillsState = {
    items: [
        { name: 'React', category: 'Frontend', level: 90 },
        { name: 'Redux Toolkit', category: 'Frontend', level: 85 },
        { name: 'Next.js', category: 'Frontend', level: 85 },
        { name: 'TypeScript', category: 'Frontend', level: 80 },
        { name: 'Tailwind CSS', category: 'Frontend', level: 90 },
        { name: 'Node.js', category: 'Backend', level: 70 },
        { name: 'Git', category: 'Tools', level: 85 },
        { name: 'VS Code', category: 'Tools', level: 95 },
        { name: 'Linux', category: 'Tools', level: 90 },
        { name: 'Zed', category: 'Tools', level: 75 },
    ],
    filter: 'All',
};

const skillsSlice = createSlice({
    name: 'skills',
    initialState,
    reducers: {
        setFilter: (state, action: PayloadAction<SkillsState['filter']>) => {
            state.filter = action.payload;
        },
    },
    selectors: {
        selectFilteredSkills: (state) => {
            if (state.filter === 'All') return state.items;
            return state.items.filter((skill) => skill.category === state.filter);
        },
    },
});

export const { setFilter } = skillsSlice.actions;
export const { selectFilteredSkills } = skillsSlice.selectors;
export default skillsSlice.reducer;
