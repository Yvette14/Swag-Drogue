import sha1 from 'sha1';
import {User} from '../app/db/schema';
import _ from 'lodash';

function generateToken(userName, password) {
  return userName + ':' + sha1(password);
}

function getUsernameFromToken(token) {
  const separatorIndex = _.lastIndexOf(token, ':');
  return token.substring(0, separatorIndex);
}

function validateToken(token, callback) {
  if (token === null || token.length === 0 || !token.includes(':')) {
    callback(null, false);
  }
  const userName = getUsernameFromToken(token);
  findUser(userName, function (err, user) {
    if (err) return next(err);
    if (user) {
      const {userName, password} = user;
      callback(null, generateToken(userName, password) === token);
    }
  });
}

function findUser(userName, callback) {
  User.findOne({userName}, function (err, user) {
    if (err) return next(err);
    callback(null, user);
  });
}

export {generateToken, validateToken, getUsernameFromToken};
