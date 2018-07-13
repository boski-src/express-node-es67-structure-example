const validator = require('express-validator/check');

export const rules = validator;

export function result (req, res, next) {
  if (req) {
    const errors = validator.validationResult(req);
    if (!errors.isEmpty()) {
      req.session.flash = {
        type: 'warning',
        message: 'Fill correctly all the required params.',
        errors: errors.array()
      };
      return res.redirect(req.header('Referer') || '/');
    }
  }

  next();
}