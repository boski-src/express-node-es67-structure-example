const validator = require('../middlewares/validator');

export default [
  validator.rules.body('title').not().isEmpty().isLength({ max: 100 }),
  validator.rules.body('description').not().isEmpty().isLength({ max: 300 }),
  validator.rules.body('image').isURL(),
  validator.result
];