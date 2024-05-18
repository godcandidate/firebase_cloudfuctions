//controller.js
const { collection, addDoc, doc, updateDoc } = require("firebase/firestore"); // (Optional, if not already imported)
const db = require("../firestore"); // Import the Firestore instance

// Create user details
async function  createUser(req, res){
    try {
        const userData = req.body;
        
        if (userData) {
            await addDoc(collection(db, "Users"), userData);
            return res.status(200).send({ msg: "User Info added successfully", userData  });
        } else {
            return res.status(400).send({ error: "Missing data, user data was not added" });
        }
    } catch (error) {
        return res.status(500).send({ error: "User not created" });
    }
};

// Update user details
async function updateUser(req, res){
    try {
        const userData = req.body;
        
        if (userData) {
            console.log("Here is working");
            const userRef = doc(db, "Users", "C");
            // To update age and favorite color:
            await updateDoc(userRef, 
                userData);
            return res.status(200).send({ msg: "User Info updated successfully", userData  });
        } else {
            return res.status(400).send({ error: "Missing data, user data was not updated" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: "User update failed" });
    }
    
}



module.exports = { createUser, updateUser };

