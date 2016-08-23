import express from 'express';
const router = express.Router();
router.get('/', function (req, res) {
  res.cookie('token');
  return res.sendStatus(200);
});

export default router;
