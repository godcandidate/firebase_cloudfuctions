//controller.js
const { collection, getFirestore, doc, setDoc } = require("firebase/firestore"); // (Optional, if not already imported)
const db = require("../firestore"); // Import the Firestore instance

// Create the collections
//const UserCollection = collection(db, "Users");


async function  createUser(req, res){
    try {
        const userData = req.body;
        
        if (userData) {
            const userRef = doc(db, "Users", "C"); 
            await setDoc(userRef, userData , { merge: true });
            return res.status(200).send({ msg: "User Info added successfully", userData  });
        } else {
            return res.status(400).send({ error: "Missing data" });
        }
    } catch (error) {
        console.error("Error adding user:", error);
        // ... (rest of your catch block)
    }
};

module.exports = { createUser };

