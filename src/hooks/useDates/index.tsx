import dayjs from 'dayjs';

export const useDates = () => {

  const FormatDDMMYYYfromDate = (date?: Date | undefined) => {
    if (date) {
      let newDate = new Date(date)
      return dayjs(`${newDate.getFullYear()}-${newDate.getMonth() + 1}-${newDate.getDate()}`);
    }
    return undefined;
  }

  const TimeConverter = (dateGMT?: string) => {
    if (!dateGMT) return null;

    const date = new Date(dateGMT);
    let time_zone = localStorage.getItem("time_zone");
    let timezoneOffset = 0;
    if (time_zone != null) {
      timezoneOffset = parseInt(time_zone.split('UTC')[1]) * 3600000;
    }
    else {
      timezoneOffset = - (date.getTimezoneOffset() * 60000)
    }

    const localDate = new Date(date.getTime() + (timezoneOffset));

    return localDate;
  }

  const GetDateCalculatedByAfterDays = (myDate: Date, days: number): Date => {
    const newDate = new Date(myDate);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
  }

  return {
    FormatDDMMYYYfromDate,
    TimeConverter,
    GetDateCalculatedByAfterDays,
  }
}
