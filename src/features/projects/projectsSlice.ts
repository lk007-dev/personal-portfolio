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
            title: 'Blonzy',
            description: 'The best online laundry & dry cleaning service in Gurgaon. Features doorstep pickup, express wash, and premium garment care.',
            tags: ['Next.js', 'React', 'Service Worker'],
            link: 'https://www.blonzydrycleaner.com/',
        },
        {
            id: '3',
            title: 'DoerDevs',
            description: 'Platform connecting businesses with on-demand software development experts. Elevating projects with top industry talent.',
            tags: ['React', 'Node.js', 'Redux'],
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
