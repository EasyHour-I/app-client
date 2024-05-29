import { useEffect } from 'react';
import styles from './DraggableEvents.module.scss';
import cn from 'classnames';
import { Draggable } from '@fullcalendar/interaction/index.js';
import { EventInput } from '@fullcalendar/core/index.js';

export interface DraggableEventsProps {
    events: EventInput[];
}

export const DraggableEvents: React.FC<DraggableEventsProps> = ({ events }) => {
    useEffect(() => {
        const draggableEl = document.getElementById('draggable-events');
        const draggableInstance = new Draggable(draggableEl as HTMLElement, {
            itemSelector: '.fc-event',
            eventData: function (eventEl) {
                const title = eventEl.getAttribute('title');
                const duration = eventEl.dataset.duration;

                return {
                    duration: duration,
                    title: title,
                    create: true,
                };
            },
        });

        return () => {
            draggableInstance.destroy();
        };
    });

    return (
        <div id="draggable-events" className={styles.events_container}>
            {events.map((event) => (
                <div
                    className={cn(styles.event, 'fc-event')}
                    title={event.title}
                    data-duration={event.duration}
                    key={event.id as string}
                >
                    <div>
                        <p className={styles.event_title}>{event.title}</p>
                    </div>
                    <div className={styles.event_data}>
                        <p>
                            times a week: <span>{event.timesPerWeek}</span>
                        </p>
                        <p>
                            length: <span>{event.duration}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};
