'use strict';

var request = require('request'),
  extend = require('extend'),
  handleErrors = require('./errorHandler.js');


var simpay = function (senderConfig) {
  var defaultConfig = {
    headers: {
      'Content-type': 'application/json'
    },
    url: 'https://simpay.pl/api/1/status',
    form: {},
    method: 'POST'
  };
  senderConfig = {
    params:{
      auth:senderConfig
    }
  };
  
  this.senderConfig = senderConfig || { params: {} };
  this.config = defaultConfig;

};

simpay.prototype.status = function (code, callback) {
  var requestData = {}, status;

  extend(true, requestData, this.config);
  extend(true, requestData.form, this.senderConfig, code._data || code);

  requestData.body = JSON.stringify(requestData.form);
  requestData.form = null;

  request.post(requestData, function (error, response, body) {
    error = handleErrors(error, body);
    if (!error) status = JSON.parse(body).respond;
    callback(error, status);
  });
};

module.exports = simpay;