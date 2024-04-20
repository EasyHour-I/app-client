import { Outlet, Route, Routes } from 'react-router-dom';
import { EditSchedulePage } from './EditSchedule/EditSchedulePage';

export const ScheduleView: React.FC = () => (
    <>
        <Outlet />
        <ScheduleViewRoutes />
    </>
);

export const ScheduleViewRoutes = () => (
    <>
        <Routes>
            <Route path="/" element={<EditSchedulePage />} />
        </Routes>
    </>
);
