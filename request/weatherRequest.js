import { check, validationResult } from 'express-validator';

export default [
  check('place').notEmpty().withMessage('Place filed is required'),
  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty())
      return res.status(400).json({
        status: false,
        message: 'Failed to make request',
        errors: errors.array(),
      });

    next();
  },
];
