import { Link } from 'react-router-dom';
import cn from 'classnames';

import { Button } from '@/components/Button';
import { Calendar } from '../../components/Calendar/Calendar';
import { DraggableEvents } from '../../components/DraggableEvents';
import { LayoutWrapper } from '@/features/layout/components/LayoutWrapper';
import { NAVIGATION_ROUTES } from '@/config/routes-navigation.const';

import styles from './EditSchedulePage.module.scss';

export const EditSchedulePage: React.FC = () => {
    return (
        <LayoutWrapper title="Schedule">
            <div className={styles.page_container}>
                <div className={styles.section_container}>
                    <div className={styles.button_container}>
                        <Link to={`/${NAVIGATION_ROUTES.groups}`}>
                            <Button
                                text="Manage Groups"
                                icon="groups"
                                size="small"
                            />
                        </Link>
                    </div>
                    <div
                        className={cn(
                            styles.section_container,
                            styles.scrollable
                        )}
                    >
                        <DraggableEvents
                            events={[
                                {
                                    id: 'Group 1',
                                    title: 'Group 1',
                                    description: 'description',
                                    duration: '01:30',
                                    timesPerWeek: 3,
                                },
                                {
                                    id: 'Group 2',
                                    title: 'Group 2',
                                    description:
                                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
                                    duration: '01:15',
                                    timesPerWeek: 2,
                                    classNames: 'display none',
                                },
                                {
                                    id: '213 3',
                                    title: 'קבוצה 3',
                                    description:
                                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
                                    duration: '01:00',
                                    timesPerWeek: 2,
                                    classNames: 'display none',
                                },
                                {
                                    id: 'Group 4',
                                    title: 'Group 4',
                                    description:
                                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
                                    duration: '00:45',
                                    timesPerWeek: 2,
                                    classNames: 'display none',
                                },
                                {
                                    id: 'Group 5',
                                    title: 'Group 5',
                                    description:
                                        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia.',
                                    duration: '00:30',
                                    timesPerWeek: 2,
                                    classNames: 'display none',
                                },
                            ]}
                        />
                    </div>
                </div>

                <div className={styles.section_container}>
                    <div className={styles.button_container}>
                        <span></span>
                        <div>
                            <Link to={`/${NAVIGATION_ROUTES.groups}`}>
                                <Button
                                    text="Export Schedule"
                                    color="secondary"
                                    icon="download"
                                    size="small"
                                />
                            </Link>
                            <Link to={`/${NAVIGATION_ROUTES.groups}`}>
                                <Button
                                    text="Add Special Event"
                                    icon="event"
                                    size="small"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className={styles.section_container}>
                        <Calendar
                            editable
                            events={[
                                {
                                    title: 'Group 1',
                                    startTime: '07:00:00',
                                    duration: '01:00:00',
                                    daysOfWeek: ['1'],
                                },
                                {
                                    title: 'Group 2',
                                    startTime: '08:00:00',
                                    duration: '00:30:00',
                                    daysOfWeek: ['1'],
                                },
                                {
                                    title: 'Group 3',
                                    startTime: '07:30:00',
                                    duration: '00:25:00',
                                    daysOfWeek: ['2'],
                                },
                            ]}
                        />
                    </div>
                    <div className={styles.button_container}>
                        <Button text="Save" size="small" />
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    );
};
