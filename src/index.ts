const addSecondDigit = (digit: number): string => (digit < 10 ? `0${digit}` : digit.toString());

const setMinutes = (date: Date, minutes) => {
  const base = new Date(date.valueOf());
  base.setMinutes(base.getMinutes() + minutes);
  return base;
};

export const getTimeString = (date: Date): string => `${addSecondDigit(date.getHours())}:${addSecondDigit(date.getMinutes())}`;

export const inputPattern = '([0-1]{1}[0-9]{1}|20|21|22|23):[0-5]{1}[0-9]{1}';

/* Define types */
export type ITimeChangeId = 'begin' | 'end';
export type ITimeChangeAction = 'up' | 'down';

/**
 * Update value of date, increase/decrease minutes
 */
const timeChange = (date: Date, method: ITimeChangeAction, minutes: number): Date => {
  if (method === 'up') {
    return setMinutes(date, minutes);
  }
  return setMinutes(date, -minutes);
};

/* Turn time string to date */
const createDate = (time: string) => {
  const value = time.split(':');
  return new Date(2020, 2, 2, parseInt(value[0], 10), parseInt(value[1], 10));
};

const inputTimeChange = (
  beginBase: string,
  endBase: string,
  minutes: number,
  changed: ITimeChangeId,
  method: ITimeChangeAction,
): { begin: string; end: string } => {
  let begin = createDate(beginBase);
  let end = createDate(endBase);

  if (changed === 'begin') {
    begin = timeChange(begin, method, minutes);
  } else {
    end = timeChange(end, method, minutes);
  }

  if (changed === 'begin' && begin.getTime() >= end.getTime()) {
    end = timeChange(begin, 'up', minutes);
  } else if (changed === 'end' && end.getTime() <= begin.getTime()) {
    begin = timeChange(end, 'down', minutes);
  }
  return { begin: getTimeString(begin), end: getTimeString(end) };
};

export default inputTimeChange;
