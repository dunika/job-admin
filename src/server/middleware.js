export const redirects = () => (req, res, next) => {
  if (req.path === '/') {
    res.redirect('/indeed').end();
    res.end();
  }
  next();
};

export const apiErrorHandler = () => (error, req, res, next) => {
  const message = error.message || error;
  console.error(`Error: ${message}`);
  res.status(500).json({ error: message });
};
