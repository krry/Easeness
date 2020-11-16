import {format, parseISO} from 'date-fns'
// import {constants} from 'buffer'

const Date = ({dateString}) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL	d, yyyy')}</time>
}

export default Date
