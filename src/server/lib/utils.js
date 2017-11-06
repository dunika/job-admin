export const listen = (server, port) => new Promise((resolve, reject) => { // eslint-disable-line
  const listener = server.listen(port, (error) => {
    if (error) reject(error);
    resolve(listener);
  });
});

export const getIp = (req) => {
  const xForwarded = req.headers['x-forwarded-for'];
  if (xForwarded) {
    return xForwarded.split(',')[0].trim();
  }
  return req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
};
