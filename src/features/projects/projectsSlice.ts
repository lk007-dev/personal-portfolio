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
            image: '/projects/coneon.png',
        },
        {
            id: '2',
            title: 'Dayout Cab Service',
            description: 'Premium cab service in Delhi NCR. Features reliable airport transfers, city tours, and comfortable outstation travel.',
            tags: ['Next.js', 'React', 'Service Worker'],
            link: 'https://www.dayoutcabservice.com/',
            image: '/projects/dayoutcab.png',
        },
        {
            id: '3',
            title: 'DoerDevs',
            description: 'A sleek, no-login B2B platform connecting businesses with software experts, powered by Firebase for secure query and lead management.',
            tags: ['React', 'Firebase', 'Redux'],
            link: 'https://doerdevs.com/',
            image: '/projects/doerdevs.png',
        },
        {
            id: '4',
            title: 'The Luxem Hotel',
            description: 'A luxury boutique hotel booking platform featuring a dynamic date-based reservation workflow, room selector, and premium visual components.',
            tags: ['Next.js', 'React', 'Redux Toolkit', 'Tailwind CSS'],
            link: 'https://www.theluxemhotel.com',
            image: '/projects/theluxemhotel.png',
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
