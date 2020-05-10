import { inputTimeChange } from './';

describe('Lib inputTimeChange', () => {
  it('Shoult increase beginBase', () => {
    const result = inputTimeChange('08:00', '09:00', 15, 'begin', 'up');
    expect(result).toStrictEqual({ begin: '08:15', end: '09:00' });
  });

  it('Shoult decrease beginBase', () => {
    const result = inputTimeChange('08:00', '09:00', 15, 'begin', 'down');
    expect(result).toStrictEqual({ begin: '07:45', end: '09:00' });
  });

  // #

  it('Shoult increase endBase', () => {
    const result = inputTimeChange('08:00', '09:00', 15, 'end', 'up');
    expect(result).toStrictEqual({ begin: '08:00', end: '09:15' });
  });

  it('Shoult decrease endBase', () => {
    const result = inputTimeChange('08:00', '09:00', 15, 'end', 'down');
    expect(result).toStrictEqual({ begin: '08:00', end: '08:45' });
  });

  // #

  it('Shoult increase beginBase and endBase when change begin', () => {
    const result = inputTimeChange('08:00', '08:00', 15, 'begin', 'up');
    expect(result).toStrictEqual({ begin: '08:15', end: '08:30' });
  });

  it('Shoult increase beginBase and endBase when change end', () => {
    const result = inputTimeChange('08:00', '08:00', 15, 'end', 'down');
    expect(result).toStrictEqual({ begin: '07:30', end: '07:45' });
  });
});
