import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import {
    // DateSelectArg,
    EventContentArg,
    EventSourceInput,
    EventClickArg,
    CustomContentGenerator,
} from '@fullcalendar/core/index.js';

import styles from './Calendar.module.scss';
import './Calendar.scss';

export interface CalendarProps {
    editable?: boolean;
    events?: EventSourceInput;
}

export const Calendar: React.FC<CalendarProps> = ({ editable, events }) => {
    const handleEventClick = (arg: EventClickArg) => {
        arg.event.remove();
    };

    return (
        <div className={styles.calendar_container}>
            <FullCalendar
                plugins={[timeGridPlugin, interactionPlugin]}
                initialView="timeGridWeek"
                slotMinTime="06:00:00"
                slotMaxTime="24:00:00"
                slotDuration="01:00:00"
                snapDuration="00:05:00"
                allDaySlot={false}
                headerToolbar={false}
                dayHeaderFormat={{
                    weekday: 'long',
                }}
                eventTimeFormat={{
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: false,
                }}
                slotLabelFormat={{
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: false,
                }}
                height="100%"
                editable={editable}
                droppable={editable}
                eventClick={handleEventClick}
                expandRows
                eventDurationEditable={false}
                events={events}
                eventContent={renderEventContent}
                eventOverlap={false}
            />
        </div>
    );
};

const renderEventContent: CustomContentGenerator<EventContentArg> = (
    eventInfo
) => {
    function diffMinutes(start: Date, end: Date) {
        return (
            end.getHours() * 60 -
            start.getHours() * 60 +
            end.getMinutes() -
            start.getMinutes()
        );
    }

    return (
        <div className={styles.event_data}>
            <p className={styles.title}>{eventInfo.event.title}</p>
            {diffMinutes(
                eventInfo.event.start as Date,
                eventInfo.event.end as Date
            ) >= 25 && <p className={styles.time}>{eventInfo.timeText}</p>}
        </div>
    );
};
