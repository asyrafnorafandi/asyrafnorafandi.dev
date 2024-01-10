import moment from 'moment'

const dateFormatter = new Intl.DateTimeFormat('en-SG', {
  year: 'numeric',
  month: 'short',
  timeZone: 'UTC',
})

export function FormattedDate({
  dateFrom,
  dateTo,
  ...props
}: React.ComponentPropsWithoutRef<'time'> & {
  dateFrom: string | Date
  dateTo: string | Date
}) {
  let dateFromMoment = moment(dateFrom)
  let dateToMoment = moment(dateTo)

  // Calculate difference
  const years = dateToMoment.diff(dateFromMoment, 'years')
  dateFromMoment.add(years, 'years')
  const months = dateToMoment.diff(dateFromMoment, 'months')

  return (
    <time {...props}>
      <span className="text-white/75">
        {dateFromMoment.format('MMM YYYY')} - {dateToMoment.format('MMM YYYY')}
      </span>
      <div className="text-sky-300/75">
        {years} yrs {months} mos
      </div>
    </time>
  )
}
