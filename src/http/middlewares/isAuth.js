export default function (req, res, next) {
  if (!req.user.authenticated)
    return res.redirect('/');

  next();
};