import express from 'express';
import userApi from './users';
import sessionApi from './sessions';
import cookieApi from './cookies';
import logOutApi from './logOut';

const router = express.Router();

router.use('/users', userApi);
router.use('/sessions', sessionApi);
router.use('/cookies', cookieApi);
router.use('/logOut', logOutApi);

export default router;
