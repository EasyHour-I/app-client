import { Outlet } from 'react-router-dom';

import styles from './ProtectedLayout.module.scss';
import { Sidebar } from '../Sidebar';
import { sidebarItems } from '../../config/sidebarItems.const';

export const ProtectedLauout: React.FC = () => {
    return (
        <div className={styles.container}>
            <Sidebar items={sidebarItems} />
            <div className={styles.content_container}>
                <Outlet />
            </div>
        </div>
    );
};
