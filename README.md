SMSPay.pl - NodeJS simple LIB
=========

Implementation of smspay.pl for node.js

## Usage:
```text
$npm install worotyns/smspay
```
#### then:

```javascript
var simpay = require('./'),
    simpayHandler = simpay.setSender({
      key: 'XX351e6c',
      secret: 'XX3ae0d4b3e06acda97524d7af20ecf8'
    });
    
    var code;
    code = new simpay.Code();
    code.code('E71EAD').setNumber('7355').serviceId('469');
    simpayHandler.status(code, function(err, response){
        console.log("err: "+ err, "| resp: "+ response);
    });
```