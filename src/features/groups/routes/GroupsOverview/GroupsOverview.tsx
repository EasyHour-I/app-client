import { useState } from 'react';

import { LayoutWrapper } from '@/features/layout/components/LayoutWrapper';
import { Button } from '@/components/Button';

import { Group } from '../../types/group';

import styles from './GroupsOverview.module.scss';
import { Link } from 'react-router-dom';
import { NAVIGATION_ROUTES } from '@/config/routes-navigation.const';

export const GroupsOverview: React.FC = () => {
    const [groups, setGroups] = useState<Group[]>([
        { id: 1, name: 'group1', length: '01:00', timesPerWeek: 3 },
        { id: 2, name: 'group1', length: '01:00', timesPerWeek: 3 },
        { id: 3, name: 'group1', length: '01:00', timesPerWeek: 3 },
        { id: 4, name: 'group1', length: '01:00', timesPerWeek: 3 },
        { id: 5, name: 'group1', length: '01:00', timesPerWeek: 3 },
        { id: 6, name: 'group1', length: '01:00', timesPerWeek: 3 },
        { id: 7, name: 'group1', length: '01:00', timesPerWeek: 3 },
        { id: 8, name: 'group1', length: '01:00', timesPerWeek: 3 },
        { id: 9, name: 'group1', length: '01:00', timesPerWeek: 3 },
        { id: 10, name: 'group1', length: '01:00', timesPerWeek: 3 },
    ]);

    const onDelete = (id: number) => {
        setGroups(groups.filter((group) => group.id !== id));
    };

    return (
        <LayoutWrapper title="Groups">
            <div className={styles.page_container}>
                <div className={styles.buttons_container}>
                    <Button text="Add Group" icon="groups" size="small" />
                </div>
                <div className={styles.groups_container}>
                    {groups.map((group) => (
                        <div className={styles.group}>
                            <p className={styles.name}>{group.name}</p>
                            <div className={styles.data_container}>
                                <p>
                                    Length: <span>{group.length}</span>
                                </p>
                                <p>
                                    Times Per Week:{' '}
                                    <span>{group.timesPerWeek}</span>
                                </p>
                            </div>
                            <div className={styles.buttons_container}>
                                <Link
                                    to={`${NAVIGATION_ROUTES.groups.edit}/${group.id}`}
                                >
                                    <Button
                                        text=""
                                        icon="edit"
                                        size="small"
                                        color="secondary"
                                        transparent
                                    />
                                </Link>

                                <Button
                                    text=""
                                    icon="delete"
                                    size="small"
                                    color="secondary"
                                    transparent
                                    onClick={() => onDelete(group.id)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </LayoutWrapper>
    );
};
