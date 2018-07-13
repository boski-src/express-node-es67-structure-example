export function serverError (err, req, res) {
  console.log(err);
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    code: err.status || 500,
    error: err
  });
}

export function Error404 (req, res,) {
  res.status(404);
  res.render('error', {
    message: 'Page not found',
    code: 404
  });
}