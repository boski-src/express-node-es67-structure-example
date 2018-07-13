const validator = require('../middlewares/validator');

const Store = [
  validator.rules.body('username').not().isEmpty().isLength({ min: 3, max: 100 }),
  validator.rules.body('email').not().isEmpty().isEmail().normalizeEmail(),
  validator.rules.body('password').not().isEmpty().isLength({ min: 8 }),
  validator.result
];

const Update = [
  validator.rules.body('username').not().isEmpty().isLength({ min: 3, max: 100 }),
  validator.result
];

export default { Store, Update }