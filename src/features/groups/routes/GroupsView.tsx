import { Outlet, Route, Routes } from 'react-router-dom';

import { GroupsOverview } from './GroupsOverview/GroupsOverview';

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
        </Routes>
    </>
);
