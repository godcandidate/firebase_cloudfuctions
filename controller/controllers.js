async function  createUser(req, res){
    try {
        const data = req.body;
        
        if (data) {
            return res.status(200).send({ msg: "User Info added successfully" });
        } else {
            return res.status(500).send({ error: "User was not added" });
        }
    } catch (error) {
        return res.status(500).send({ error: "Internal server error" })
    }
};

module.exports = { createUser };

