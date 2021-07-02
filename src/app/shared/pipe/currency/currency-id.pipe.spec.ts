import { CurrencyIDPipe } from './currency-id.pipe';

describe('CurrencyIDPipe', () => {
  const pipe = new CurrencyIDPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return id Currency:', () => {
    var formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    });

    expect(pipe.transform(10000)).toBe(formatter.format(10000));
  });
});
