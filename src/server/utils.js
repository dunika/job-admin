export const getIp = (req) => {
  const xForwarded = req.headers['x-forwarded-for'];
  if (xForwarded) {
    return xForwarded.split(',')[0].trim();
  }
  return req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;
};
