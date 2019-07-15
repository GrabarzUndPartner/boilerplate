const ifaces = require('os').networkInterfaces();
let lookupIpAddress = null;

function getIP (details) {
  if (details.family === 'IPv4') {
    lookupIpAddress = details.address;
  }
}

module.exports = function () {
  for (var dev in ifaces) {
    if (ifaces.hasOwnProperty(dev)) {
      if (dev !== 'en1' && dev !== 'en0') {
        continue;
      }

      ifaces[dev].forEach(getIP);
      if (lookupIpAddress) {
        break;
      }
    }
  }
  return lookupIpAddress;
};