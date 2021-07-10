import { DateNow } from './date-now.pipe';

describe('DateFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new DateNow();
    expect(pipe).toBeTruthy();
  });
});
