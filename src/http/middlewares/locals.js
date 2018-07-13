import env from '../../env';

export default function (req, res, next) {
  res.locals.APP_NAME = env.APP_NAME;
  res.locals.flash = req.session.flash;
  delete req.session.flash;

  next();
}