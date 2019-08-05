import moment from 'moment';

export const getDaysOfMonth = (date) => {
  const monthDaysAmount = moment(date, 'MMMM YYYY').daysInMonth();
  let daysOfSelectedMonth = [];
  for (let i = 0; i < monthDaysAmount; i++) {
    daysOfSelectedMonth.push(moment(date, 'MMMM YYYY').date(i + 1));
  }
  return daysOfSelectedMonth;
}

export const getWeeks = (date) => {
  let weeks = [];
  const days = getDaysOfMonth(date);

  days.forEach((day, index) => {
    const numberDay = day.day();
    const weeekOfMonth = weekOfMonth(day) - 1;
    if (!weeks[weeekOfMonth]) {
      weeks[weeekOfMonth] = new Array(7).fill(null);
    }
    weeks[weeekOfMonth][numberDay] = {
      day,
      dayOfMonth: index + 1
    };
  });

  const countNulls = weeks[0].filter(day => !day).length
  const daysMonthBefore = date.subtract(1, 'months').daysInMonth();

  // check null values (other month)
  let count = 0;
  const newWeeks = weeks.map((week, weekIndex) => {
    return week.map((day, dayIndex) => {
      if (weekIndex === 0 && !day) {
        return {
          day: null,
          dayOfMonth: daysMonthBefore - (countNulls - (dayIndex + 1))
        }
      } else if (weekIndex !== 1 && !day) {
        count++;
        return {
          day: null,
          dayOfMonth: count
        }
      }
      return day;
    });
  });
  return newWeeks;
}

const weekOfMonth = (date) => {
  let weekInYearIndex = date.week();
  if (date.year() !== date.weekYear()) {
    weekInYearIndex = date.clone().subtract(1,'week').week() + 1;
  }
  return weekInYearIndex - moment(date).startOf('month').week() + 1;
}