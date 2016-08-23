import express from 'express';
import {validateToken} from '../../shared/getToken';

const router = express.Router();

router.get('/', function (req, res, next) {
  const token = req.cookies['token'];
  validateToken(token, function (err, hasToken) {
    if (err) return next(err);
    if (hasToken) {
      return res.sendStatus(201);
    }
    return res.sendStatus(401);
  });
});

export default router;
