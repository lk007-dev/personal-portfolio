import { createSlice } from '@reduxjs/toolkit';

export interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    link: string;
    image?: string; // We will use gradients/icons for now as we can't screenshot
}

interface ProjectsState {
    items: Project[];
}

const initialState: ProjectsState = {
    items: [
        {
            id: '1',
            title: 'Coneon',
            description: 'A modern, high-performance web application featuring a sleek user interface and seamless navigation.',
            tags: ['React', 'Vite', 'Tailwind CSS'],
            link: 'https://www.coneon.in',
        },
        {
            id: '2',
            title: 'Dayout Cab Service',
            description: 'Premium cab service in Delhi NCR. Features reliable airport transfers, city tours, and comfortable outstation travel.',
            tags: ['Next.js', 'React', 'Service Worker'],
            link: 'https://www.dayoutcabservice.com/',
        },
        {
            id: '3',
            title: 'DoerDevs',
            description: 'A sleek, no-login B2B platform connecting businesses with software experts, powered by Firebase for secure query and lead management.',
            tags: ['React', 'Firebase', 'Redux'],
            link: 'https://doerdevs.com/',
        },
    ],
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {}, // Static data for now, but extensible
    selectors: {
        selectAllProjects: (state) => state.items,
    },
});

export const { selectAllProjects } = projectsSlice.selectors;
export default projectsSlice.reducer;
