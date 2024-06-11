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

const groups: SidebarItem = {
    text: 'Groups',
    icon: 'groups',
    url: `/${NAVIGATION_ROUTES.groups.base}`,
};

export const sidebarItems: SidebarItem[] = [overview, schedule, groups];
