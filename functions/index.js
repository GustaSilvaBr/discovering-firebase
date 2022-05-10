//Creating cloud functions and set up triggers
const functions = require("firebase-functions");

//Accessing the firestore
const admin = require('firebase-admin');
admin.initializeApp();

//Take the text and insert into Firestore
//Under the path /messages/:documentId/original
exports.addMessage = functions.https.onRequest(async (req, res) => {
    //Grab the text parameter
    const level = req.query.text;
    //Push the new message into Firestore by Firebase Admin SDK
    const writeResult = await admin.firestore().collection('grades').add({ level: level });

    return res.status(200).send({ result: `Message with ID: ${writeResult.id} added.` });
});

exports.makeUppercase = functions.firestore.document('/grades/{documentId}').onCreate((snap, context) => {
    const level = snap.data().level;
    let levelName = "";
    switch (level) {
        case '1':
            levelName = "first"
            break;
        case '2':
            levelName = "second"
            break;
        case '3':
            levelName = "third"
            break;
        default:
            levelName = "unknown"
            break;
    }

    return snap.ref.set({ levelName: levelName }, { merge: true });
});