import jwt from 'jsonwebtoken';
export const encodeToken = (token) => {
  let encodedToken = '';
  const tokenToArray = token.match(/.{1,3}/g);
  tokenToArray.forEach((i) => {
    const random = Math.random().toString(36).substr(2, 3);
    const n = i.concat(random);
    encodedToken = encodedToken.concat(n);
  });
  return encodedToken;
};

export const decodeToken = (token) => {
  let decodedToken = '';
  token.match(/.{1,6}/g).forEach((i) => {
    const n = i.substring(0, i.length - 3);
    decodedToken = decodedToken.concat(n);
  });
  return jwt.verify(decodedToken, 'ourSecretIsHedwige', (error, dec) => {
    if (error) {
      return 'error';
    }
    return dec.data;
  });
};
