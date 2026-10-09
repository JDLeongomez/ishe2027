// Dates in the content files have no time zone, so they are read as UTC.
// Formatting them as UTC too keeps "5 July" from turning into "4 July".

const long = new Intl.DateTimeFormat('en-GB', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});
const dayMonth = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', timeZone: 'UTC' });
const weekday = new Intl.DateTimeFormat('en-GB', { weekday: 'long', timeZone: 'UTC' });

export const formatDate = (date: Date) => long.format(date);
export const formatDayMonth = (date: Date) => dayMonth.format(date);
export const formatWeekday = (date: Date) => weekday.format(date);
export const isoDate = (date: Date) => date.toISOString().slice(0, 10);
