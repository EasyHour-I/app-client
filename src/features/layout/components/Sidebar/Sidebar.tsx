import { NavLink, Link } from 'react-router-dom';

import { SidebarItem } from '../../types/sidebarItem';
import styles from './Sidebar.module.scss';
import { Button } from '@/components/Button';

export interface SidebarProps {
    items: SidebarItem[];
}

export const Sidebar: React.FC<SidebarProps> = ({ items }) => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.container}>
                <div className={styles.logo_container}>
                    <img src="/skedo_logo.svg" alt="skedo logo" />
                </div>
                <div className={styles.links_container}>
                    {items.map((item) => (
                        <NavLink
                            to={item.url}
                            className={({ isActive }) =>
                                isActive ? styles.active : undefined
                            }
                        >
                            <span
                                className="material-symbols-rounded"
                                data-icon={item.icon}
                            ></span>
                            <p className={styles.link_text}>{item.text}</p>
                        </NavLink>
                    ))}
                </div>
                <div className={styles.settings_container}>
                    <div className={styles.user_data_container}>
                        <img src="/skedo_logo.svg" alt="profile picture" />
                        <div>
                            <p className={styles.name}>Username</p>
                            <p className={styles.role}>Role</p>
                        </div>
                    </div>
                    {/* switch organization button */}
                    {/* <Link to={'/'}>
                        <Button
                            text="switch organization"
                            icon="corporate_fare"
                            size="small"
                            color="accent"
                            stretch
                            disabled
                        />
                    </Link> */}
                </div>
            </div>
        </aside>
    );
};
