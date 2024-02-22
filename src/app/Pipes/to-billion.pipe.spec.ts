import { ToBillionPipe } from './to-billion.pipe';

describe('ToBillionPipe', () => {
  it('create an instance', () => {
    const pipe = new ToBillionPipe();
    expect(pipe).toBeTruthy();
  });
});
