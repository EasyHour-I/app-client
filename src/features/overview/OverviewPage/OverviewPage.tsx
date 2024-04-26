import { LayoutWrapper } from '@/features/layout/components/LayoutWrapper';
import styles from './OverviewPage.module.scss';
import { Button } from '@/components/Button';
import { Link } from 'react-router-dom';
import { NAVIGATION_ROUTES } from '@/config/routes-navigation.const';
import { Calendar } from '@/features/schedule/components/Calendar/Calendar';

export const OverviewPage: React.FC = () => {
    return (
        <LayoutWrapper title="Overview">
            <div className={styles.page_container}>
                <div className={styles.section_container}>
                    <h2>Schedule</h2>
                    <div className={styles.content_container}>
                        <Calendar
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
                        <Link to={`/${NAVIGATION_ROUTES.schedule}`}>
                            <Button
                                text="Edit Schedule"
                                icon="edit"
                                size="small"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </LayoutWrapper>
    );
};
