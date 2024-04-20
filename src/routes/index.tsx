import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { NAVIGATION_ROUTES } from '../config/routes-navigation.const';

import { ScheduleView } from '../features/schedule/routes/ScheduleView';
import { ProtectedLauout } from '../features/layout/components/ProtectedLayout/ProtectedLayout';

export const Routers: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<ProtectedLauout />}>
                    <Route
                        path={`/${NAVIGATION_ROUTES.schedule}/*`}
                        element={<ScheduleView />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
