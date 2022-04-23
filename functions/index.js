//Creating cloud functions and set up triggers
const functions = require("firebase-functions");

//Accessing the firestore
const admin = require('firebase-admin');
admin.initializeApp();

//Take the text and insert into Firestore
//Under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    //Grab the text parameter
    const original = req.query.text;
    //Push the new message into Firestore by Firebase Admin SDK
    const writeResult = await admin.firestore().collection('messages').add({ original: original });

    res.json({ result: `Message with ID: ${writeResult.id} added.` });
});