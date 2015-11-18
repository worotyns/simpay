'use strict';

exports.Code = require('./lib/code.js');
exports.API = require('./lib/config.js');
exports.setSender = function(senderConfig){
     return exports.sender = new exports.API(senderConfig);
};
