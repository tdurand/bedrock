import { SkiDayRow } from "./SkiDayRow"
import IconTerrain from 'react-icons/lib/md/terrain'
import IconSnowFlake from 'react-icons/lib/ti/weather-snow'
import IconCalendar from 'react-icons/lib/fa/calendar'

// Loop here
export const SkiDayList = ({days}) => (
    <table className="table">
        <thead>
            <tr>
                <th>Date</th>
                <th>Resort</th>
                <th>Powder</th>
                <th>Backcountry</th>
            </tr>
        </thead>
        <tbody>
            {days.map((day, i) => 
                <SkiDayRow key={i}
                           {...day}
                 />
            )}
        </tbody>
    </table>
)

