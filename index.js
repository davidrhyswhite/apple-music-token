const jwt = require('jsonwebtoken');
const algorithm = 'ES256';

module.exports = function setupToken (expiration) {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + expiration;

  return function createToken (secret, teamid, keyid) {
    const headers = { algorithm, keyid };
    const payload = { iss: teamid, exp, iat };

    const token = jwt.sign(payload, secret, headers);

    return token;
  };
};
