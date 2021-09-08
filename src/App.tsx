import { parseDate } from 'chrono-node'
import dayjs from 'dayjs'
import React, { useMemo, useState } from 'react'

function App () {

	const [pingDateChanged, setPingDateChanged] = useState<number>(0)
	const dt = useMemo(() => {
		const paths = window.location.pathname.split('/')
		const lastPath = paths[paths.length - 1]
		if (!lastPath) return null
		try {
			return dayjs(parseDate(decodeURIComponent(lastPath)))
		} catch (e) {
			console.error(e)
			return null
		}
	}, [pingDateChanged])
	const dtConverted = useMemo(() => {
	}, [dt])

	return (
		<>
			<div className='hero is-fullheight'>
				hi,
				{ dt
					? <>
						{ dt.weekday() } { dt.format('HH:mm A') } is
					</>
					: 'we couldn\'t parse it, sorry'
				}
			</div>
		</>
	)
}

export default App
