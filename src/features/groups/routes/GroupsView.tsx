import { Outlet, Route, Routes } from 'react-router-dom';

import { NAVIGATION_ROUTES } from '@/config/routes-navigation.const';

import { GroupsOverview } from './GroupsOverview/GroupsOverview';
import { GroupForm } from './EditGroup/GroupForm';

export const GroupsView: React.FC = () => (
    <>
        <Outlet />
        <GroupsViewRoutes />
    </>
);

export const GroupsViewRoutes = () => (
    <>
        <Routes>
            <Route path="/" element={<GroupsOverview />} />
            <Route
                path={`/${NAVIGATION_ROUTES.groups.edit}/:groupId`}
                element={<GroupForm type="edit" />}
            />
            <Route
                path={`/${NAVIGATION_ROUTES.groups.create}/:groupId`}
                element={<GroupForm type="create" />}
            />
        </Routes>
    </>
);
