var express = require('express')
var jwt = require('jsonwebtoken');
const fs = require('fs');
var app = express()

//basic JWT generate sample.
app.get('/token/:id', function (req, res) {
    // sign with RSA SHA256 case
    //var cert = fs.readFileSync('private.key');  // get private key

    // sign with default (HMAC SHA256)
    // TODO:Payload with scope...
    var token = jwt.sign(
        { ClientId: req.params.id },
        'devsecret',
        { expiresIn: '1h' }
    );

    res.send(token);
})

app.listen(8888, function () {
  console.log('JWT-server on port 8888!');
})
