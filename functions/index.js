const functions = require('firebase-functions');

exports.helloWorld = functions.https.onRequest((req, res) => {
    res.send("Hello from fb");
});

exports.Hello = functions.https.onRequest((req, res) => {
    console.log("function fired");
    res.send("Hello " + req.query.firstName);
    console.log(firstName + " received");
});