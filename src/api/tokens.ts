import express from 'express';
import all from '../token-files/tokens.json';

const router = express.Router();

type TokenResponse = any;
//http://localhost:5001/api/v1/tokens
router.get<{}, TokenResponse>('/', (req, res) => {

  
  res.json(all);
});

export default router;
