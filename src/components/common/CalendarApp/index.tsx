import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarApp.css';

export default function CalendarApp() {
    const [value, onChange] = useState(new Date());

    return (
        <div className='calendar-container'>
            <Calendar onChange={onChange} value={value} />
        </div>
    );
}