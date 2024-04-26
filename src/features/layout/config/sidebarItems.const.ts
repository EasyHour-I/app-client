import { type SidebarItem } from '../types/sidebarItem';

import { NAVIGATION_ROUTES } from '@/config/routes-navigation.const';

const overview: SidebarItem = {
    text: 'Overview',
    icon: 'home',
    url: `/${NAVIGATION_ROUTES.overview}`,
};

const schedule: SidebarItem = {
    text: 'Schedule',
    icon: 'calendar_today',
    url: `/${NAVIGATION_ROUTES.schedule}`,
};

export const sidebarItems: SidebarItem[] = [overview, schedule];
