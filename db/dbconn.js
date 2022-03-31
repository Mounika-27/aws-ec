const mongoose = require('mongoose');
class DatabaseConnection {
    async connectToDB() {
        try {
            const MONGO_URI = `mongodb+srv://Pavan:Pavan@lambda-userdatabase.qc34y.mongodb.net/test`
            await mongoose.connect(MONGO_URI);
                       console.log("database Connected");
        } catch (err) {
            console.log(err);
        }
    }
}
module.exports = new DatabaseConnection();
