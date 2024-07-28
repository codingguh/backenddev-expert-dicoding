const ClientError = require('../ClientError');
 
// eslint-disable-next-line no-undef
describe('ClientError', () => {
  // eslint-disable-next-line no-undef
  it('should throw error when directly use it', () => {
    // eslint-disable-next-line no-undef
    expect(() => new ClientError('')).toThrowError('cannot instantiate abstract class');
  });
});