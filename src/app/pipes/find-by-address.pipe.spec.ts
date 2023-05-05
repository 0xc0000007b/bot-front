import { FindByAddressPipe } from './find-by-address.pipe';

describe('FindByAddressPipe', () => {
  it('create an instance', () => {
    const pipe = new FindByAddressPipe();
    expect(pipe).toBeTruthy();
  });
});
