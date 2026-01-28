


// jest.mock('../src/services/mailer');
const mailer = require('../src/services/mailer');
const { register } = require('../src/services/userService');

describe('userService.register', () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
    jest.spyOn(mailer, "send")
  });



  test('send welcome email:', () => {
    const user = {email: 'a@b.com'};
    const res  = register(user);

    expect(res).toEqual({ success: true });
    expect(mailer.send).toHaveBeenCalled();
    expect(mailer.send).toHaveBeenCalledTimes(1);
    expect(mailer.send).toHaveBeenCalledWith('a@b.com','Welcome','Thanks for registering') 
  });
});