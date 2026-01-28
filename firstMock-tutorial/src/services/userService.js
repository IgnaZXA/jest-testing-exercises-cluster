const mailer = require('./mailer');


function register(user){
  // register logic
  // DB insert...
  mailer.send(user.email, 'Welcome', 'Thanks for registering');
  return { success : true };
}

module.exports = { register };