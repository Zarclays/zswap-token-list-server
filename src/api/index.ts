import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import emojis from './emojis';
import tokens from './tokens';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏',
  });
});

router.use('/emojis', emojis);

router.use('/tokens', tokens);

export default router;
