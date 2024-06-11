import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NAVIGATION_ROUTES } from '../config/routes-navigation.const';

import { ScheduleView } from '../features/schedule/routes/ScheduleView';
import { ProtectedLauout } from '../features/layout/components/ProtectedLayout';
import { OverviewPage } from '@/features/overview';
import { GroupsView } from '@/features/groups';

export const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedLauout />}>
                    <Route
                        path={`/${NAVIGATION_ROUTES.overview}`}
                        element={<OverviewPage />}
                    />
                    <Route
                        path={`/${NAVIGATION_ROUTES.schedule}/*`}
                        element={<ScheduleView />}
                    />
                    <Route
                        path={`/${NAVIGATION_ROUTES.groups.base}/*`}
                        element={<GroupsView />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
