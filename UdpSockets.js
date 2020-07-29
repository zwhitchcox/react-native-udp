/**
 * @providesModule UdpSockets
 * @flow
 */

const UdpSocket = require('./UdpSocket')

exports.createSocket = function(options) {
  if (typeof options === 'string') options = { type: options }
  return new UdpSocket(options)
}
global.Buffer = global.Buffer || require('buffer').Buffer

exports.Socket = UdpSocket
