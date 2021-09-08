import * as chrono from 'chrono-node'
import dayjs from 'dayjs'
import weekday from 'dayjs/plugin/weekday'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(weekday)
dayjs.extend(utc)
dayjs.extend(timezone)

const userLocalTZ = Intl.DateTimeFormat().resolvedOptions().timeZone
dayjs.tz.setDefault(userLocalTZ)

const parseDate = (inputString: string) => dayjs(chrono.parseDate(inputString.replace(/-/g, ' ')))

export default {
	parseDate,
	userLocalTZ
}
