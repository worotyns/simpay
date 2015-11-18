'use strict';
var extend = require('extend');

var Code = function (options) {
  this._data = { params: {} };
  options ? extend(this._data, options) : null;
};

Code.prototype.code = function (code) {
  this._data.params.code = code;
  return this;
};

Code.prototype.setNumber = function (num) {
  this._data.params.number = num;
  return this;
};

Code.prototype.serviceId = function (service_id) {
  this._data.params.service_id = service_id;
  return this;
};

module.exports = Code;
