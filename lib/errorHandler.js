'use strict';

var responseErrorsCodeMessage = {
  '98': 'Empty method',
  '99': 'Empty API version',
  '100': 'Empty params',
  '101': 'API version not exists',
  '102': 'API version status is offline',
  '103': 'Client API login data was too short',
  '104': 'Wrong client API login data (key, secret)',
  '105': 'Wrong client status',
  '106': 'Wrong API version method',
  '107': 'No method require params',
  '201': 'System error',
  '404': 'SMS code not found',
  '405': 'SMS code already used'
};

module.exports = function (httpRequestError, httpResponseBody) {
  try {
    httpResponseBody = JSON.parse(httpResponseBody).error[0];
  } catch (error) {
    httpRequestError = error;
  }
  return httpRequestError ? httpRequestError : (typeof httpResponseBody !== 'undefined') ?
    responseErrorsCodeMessage[httpResponseBody.error_code] : null;
};