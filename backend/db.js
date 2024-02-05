/**
 * connect to mongoDB
 */
const mongoose = require('mongoose')
require('dotenv').config()


connectDB = (cb) => {
    // Create a promise that resolves when the connection is successful
    const connectPromise = mongoose.connect(process.env.URI_ATLAS);
    // Create a timeout promise that rejects after the specified time
    const timeout = 5000; // Set a timeout value - 5 seconds
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Connection attempt timed out'));
        }, timeout);
    });



    // Use Promise.race to resolve or reject based on the first settled promise
    Promise.race([connectPromise, timeoutPromise])
        .then(() => {
            console.log(`connected to DB dreamsApp`);
            cb();
        })
        .catch((err) => {
            console.error("can't connect to DB:", err.message);
            cb(err);
        });
}


// module.exports = {
//     connectDB: (cb) => {
//         mongoose.connect(process.env.URI_ATLAS)
//             .then( () => {
//                 console.log(`connected to DB dreamsApp`);
//                 return cb();
//             }
//             ).catch((err) => {
//                 console.log("can't connect to DB");
//                 return cb(err);
//             })
//     }
// }


module.exports = { connectDB }