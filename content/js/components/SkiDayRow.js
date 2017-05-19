import IconTerrain from 'react-icons/lib/md/terrain'
import IconSnowFlake from 'react-icons/lib/ti/weather-snow'
import IconCalendar from 'react-icons/lib/fa/calendar'

export const SkiDayRow = ({resort,date,powder,backcountry}) => (
    <tr>
        <td>
            {resort}
        </td>
        <td>
            <IconCalendar />
            {date.getMonth()+1} / 
            {date.getDate()} /
            {date.getFullYear()}
        </td>
        <td>
            {(powder) ? <IconSnowFlake /> : null}
        </td>
        <td>
            {(backcountry) ? <IconTerrain /> : null}
        </td>
    </tr>
)
