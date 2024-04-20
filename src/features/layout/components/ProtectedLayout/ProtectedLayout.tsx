import { Outlet } from 'react-router-dom';

export const ProtectedLauout: React.FC = () => {
    return (
        <>
            <div>
                <Outlet />
            </div>
        </>
    );
};
