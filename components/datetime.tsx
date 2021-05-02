import { format, parseISO } from 'date-fns'

const Datetime = ({ dateString }) => {
	const date = dateString ? parseISO(dateString) : new Date()
	return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}

export default Datetime
